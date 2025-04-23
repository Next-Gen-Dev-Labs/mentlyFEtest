/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { render, screen } from "@testing-library/react";
import GroupCallCard from "../GroupCallCard";
import { StaticImageData } from "next/image";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, width, height, className }: any) => {
    // Extract the image name from the src if available
    const srcName =
      typeof src === "string" && src.includes("/")
        ? src.split("/").pop()?.split(".")[0]
        : "mock-image";

    return (
      <img
        src={typeof src === "object" ? "/mock-image-path.jpg" : src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        data-testid={`image-${srcName}`}
      />
    );
  },
  StaticImageData: {},
}));

// Mock Button component
jest.mock("@/ui/Button", () => ({
  __esModule: true,
  default: ({ label, className, type, icon }: any) => (
    <button
      type={type}
      className={className}
      data-testid={`button-${label.replace(/\s+/g, "-").toLowerCase()}`}
    >
      {label}
      {icon && <span data-testid="button-icon">{icon}</span>}
    </button>
  ),
}));

describe("GroupCallCard Component", () => {
  const mockUpcomingGroupCall = {
    id: 1,
    status: "Upcoming",
    studyGroup: "Front-end Development",
    title: "React Fundamentals Session",
    image: {} as StaticImageData,
    mentors: [{} as StaticImageData, {} as StaticImageData],
    time: "3:00 PM",
    date: "April 25, 2025",
  };

  const mockLiveGroupCall = {
    id: 2,
    status: "Live",
    studyGroup: "Back-end Development",
    title: "Node.js Workshop",
    image: {} as StaticImageData,
    mentors: [{} as StaticImageData],
    time: "2:00 PM",
    date: "April 23, 2025",
  };

  test("renders call title", () => {
    render(<GroupCallCard groupCallData={mockUpcomingGroupCall} />);
    expect(screen.getByText("React Fundamentals Session")).toBeInTheDocument();
  });

  test("renders upcoming status with correct styling", () => {
    render(<GroupCallCard groupCallData={mockUpcomingGroupCall} />);
    const statusElement = screen.getByText("Upcoming");
    expect(statusElement).toBeInTheDocument();

    const statusContainer = statusElement.parentElement;
    expect(statusContainer).toHaveClass("bg-[#E0DDFF]");
    expect(statusContainer).toHaveClass("text-[#1C0AE1]");
  });

  test("renders live status with correct styling", () => {
    render(<GroupCallCard groupCallData={mockLiveGroupCall} />);
    const statusElement = screen.getByText("Live");
    expect(statusElement).toBeInTheDocument();

    const statusContainer = statusElement.parentElement;
    expect(statusContainer).toHaveClass("bg-[#2AC10033]");
    expect(statusContainer).toHaveClass("text-[#1F8B01]");
  });

  test("renders date and time information", () => {
    render(<GroupCallCard groupCallData={mockUpcomingGroupCall} />);
    expect(screen.getByText("April 25, 2025")).toBeInTheDocument();
    expect(screen.getByText("3:00 PM")).toBeInTheDocument();
  });

  test("renders study group information", () => {
    render(<GroupCallCard groupCallData={mockUpcomingGroupCall} />);
    expect(screen.getByText("Study Group")).toBeInTheDocument();
    expect(screen.getByText("Front-end Development")).toBeInTheDocument();
  });

  test("renders action buttons", () => {
    render(<GroupCallCard groupCallData={mockUpcomingGroupCall} />);
    expect(screen.getByTestId("button-view-participants")).toBeInTheDocument();

    const joinButton = screen.getByTestId("button-join-now");
    expect(joinButton).toBeInTheDocument();
    expect(joinButton).toHaveClass("bg-[#6F01D04D]!");
  });
});
