/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from "@testing-library/react";
import ProgramCard from "../ProgramCard";
import { StaticImageData } from "next/image";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, width, height, className }: any) => {
    return (
      <img
        src={typeof src === "object" ? "/mock-image-path.jpg" : src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        data-testid="image"
      />
    );
  },
  StaticImageData: {},
}));

// Mock Button component
jest.mock("@/ui/Button", () => ({
  __esModule: true,
  default: ({ label, className, type }: any) => (
    <button
      type={type}
      className={className}
      data-testid={`button-${label.replace(/\s+/g, "-").toLowerCase()}`}
    >
      {label}
    </button>
  ),
}));

describe("ProgramCard Component", () => {
  const mockProgramData = {
    id: 1,
    type: "Cohort",
    title: "Web Development Bootcamp",
    image: {} as StaticImageData,
    mentors: [{} as StaticImageData, {} as StaticImageData],
    description: "Learn web development from scratch",
    host: "John Doe",
  };

  test("renders program title", () => {
    render(<ProgramCard programData={mockProgramData} />);
    expect(screen.getByText("Web Development Bootcamp")).toBeInTheDocument();
  });

  test("renders program type", () => {
    render(<ProgramCard programData={mockProgramData} />);
    expect(screen.getByText("Cohort")).toBeInTheDocument();
  });

  test("renders program description", () => {
    render(<ProgramCard programData={mockProgramData} />);
    expect(
      screen.getByText("Learn web development from scratch")
    ).toBeInTheDocument();
  });

  test("renders program host when provided", () => {
    render(<ProgramCard programData={mockProgramData} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  test('renders "Mentors" text when no host is provided', () => {
    const programWithoutHost = {
      ...mockProgramData,
      host: undefined,
    };
    render(<ProgramCard programData={programWithoutHost} />);
    expect(screen.getByText("Mentors")).toBeInTheDocument();
  });

  test("renders correct number of mentor images", () => {
    render(<ProgramCard programData={mockProgramData} />);
    const mentorImages = screen
      .getAllByTestId("image")
      .filter((img) => img.className.includes("rounded-full"));
    expect(mentorImages.length).toBe(2);
  });

  test("renders action buttons", () => {
    render(<ProgramCard programData={mockProgramData} />);
    expect(screen.getByTestId("button-view-details")).toBeInTheDocument();
    expect(screen.getByTestId("button-analysis")).toBeInTheDocument();
  });
});
