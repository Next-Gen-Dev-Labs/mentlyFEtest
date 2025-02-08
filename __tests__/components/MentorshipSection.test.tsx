import { MentorshipSection } from "@/components/mentorship-section";
import { images } from "@/constants/image";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

vi.mock("@/constants/icons", () => ({
  Icons: {
    brief_case: () => <div data-testid="brief-case-icon" />,
    location: () => <div data-testid="location-icon" />,
    pro_icon1: () => <div data-testid="pro-icon1" />,
    pro_icon2: () => <div data-testid="pro-icon2" />,
    pro_icon3: () => <div data-testid="pro-icon3" />,
    pro_icon4: () => <div data-testid="pro-icon4" />,
    pro_icon5: () => <div data-testid="pro-icon5" />,
    pro_icon6: () => <div data-testid="pro-icon6" />,
  },
}));

describe("MentorshipSection", () => {
  it("renders the current date", () => {
    render(<MentorshipSection />);
    expect(
      screen.getByText("13th February 2024, 12:15 PM (Local time)."),
    ).toBeInTheDocument();
  });

  it("renders the mentorship program title", () => {
    render(<MentorshipSection />);
    expect(screen.getByText("Mentorship Program")).toBeInTheDocument();
  });

  it("renders the banner image", () => {
    render(<MentorshipSection />);
    const bannerImage = screen.getByAltText("banner");
    expect(bannerImage).toBeInTheDocument();
    expect(bannerImage).toHaveAttribute("src", images.mentorship_banner.src);
  });

  it("renders the program description", () => {
    render(<MentorshipSection />);
    expect(
      screen.getByText(
        /UI\/UX Design check ins with faith is a way for beginners in UI\/UX Design to get started/,
      ),
    ).toBeInTheDocument();
  });

  it("renders all mentorship data cards", () => {
    render(<MentorshipSection />);
    expect(screen.getByText("mentorship programs")).toBeInTheDocument();
    expect(screen.getByText("21/4/2024")).toBeInTheDocument();
    expect(screen.getByText("In Person")).toBeInTheDocument();

    const briefCaseIcons = screen.getAllByTestId("brief-case-icon");
    expect(briefCaseIcons).toHaveLength(2);
    expect(screen.getByTestId("location-icon")).toBeInTheDocument();
  });

  it("renders the ProgramInformation component", () => {
    render(<MentorshipSection />);
    expect(screen.getByText("Program Information Text")).toBeInTheDocument();
    expect(screen.getByText("Program Information Text 2")).toBeInTheDocument();
  });
});
