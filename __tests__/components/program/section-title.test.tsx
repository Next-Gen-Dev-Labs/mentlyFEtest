import { SectionTitle } from "@/components/program/section-title";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("SectionTitle", () => {
  it("renders the heading text correctly", () => {
    render(<SectionTitle />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Program Information");
  });

  it("displays the description text", () => {
    render(<SectionTitle />);

    expect(screen.getByText("Describe Section Title")).toBeInTheDocument();
  });

  it("renders the TitleEditor component", () => {
    render(<SectionTitle />);

    expect(screen.getByTestId("title-editor")).toBeInTheDocument();
  });
});
