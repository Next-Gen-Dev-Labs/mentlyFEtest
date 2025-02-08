import ProgramInformation from "@/components/program/programe-section";
import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: { children: ReactNode }) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("ProgramSection", () => {
  it("renders all required components and elements", () => {
    render(<ProgramInformation />);

    // Check for header section
    expect(screen.getByText("Back to Home")).toBeInTheDocument();

    // Check for callout messages
    expect(
      screen.getByText(/Provide your prefered title for this section/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Provide a clear and concise description/i),
    ).toBeInTheDocument();

    // Check for Add Section button
    expect(screen.getByText("Add new section")).toBeInTheDocument();
    expect(
      screen.getByText("(maximum number of sections to add is 3)"),
    ).toBeInTheDocument();

    // Check for checkbox and its label
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(
      screen.getByText("Show this section when Published"),
    ).toBeInTheDocument();

    // Check for footer buttons
    expect(screen.getByText("Go Back")).toBeInTheDocument();
    expect(screen.getByText("Save & Proceed")).toBeInTheDocument();
  });
});
