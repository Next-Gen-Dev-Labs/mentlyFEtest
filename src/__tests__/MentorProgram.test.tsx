import { render, screen } from "@testing-library/react";

import { programData } from "@/shared/data";
import "@testing-library/jest-dom";
import MentorProgram from "@/components/Programs/MentorProgram";

describe("MentorProgram Component", () => {
  it("renders the mentorship program title", () => {
    render(<MentorProgram />);
    expect(
      screen.getByText("13th February 2024, 12:15 PM (Local time).")
    ).toBeInTheDocument();
  });

  it("renders the event title", () => {
    render(<MentorProgram />);
    expect(
      screen.getByText("Mastering the work life Equation")
    ).toBeInTheDocument();
  });

  it("renders the speaker name", () => {
    render(<MentorProgram />);
    expect(screen.getByText("Nwachukwu Peculiar")).toBeInTheDocument();
  });

  it("renders all program data icons and texts", () => {
    render(<MentorProgram />);
    programData.forEach((item) => {
      expect(screen.getByText(item.text)).toBeInTheDocument();
    });
  });

  it("renders program information sections", () => {
    render(<MentorProgram />);
    expect(screen.getByText("Program Information Text")).toBeInTheDocument();
    expect(screen.getByText("Program Information Text 2")).toBeInTheDocument();
  });
});
