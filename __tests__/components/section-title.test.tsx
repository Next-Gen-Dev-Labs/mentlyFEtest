import { SectionTitle } from "@/components/section-title";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("SectionTitle", () => {
  it("renders the title correctly", () => {
    const title = "Test Title";
    render(<SectionTitle title={title} />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(title);
  });

  it("renders with subtitle when provided", () => {
    const title = "Test Title";
    const subtitle = "Test Subtitle";
    render(<SectionTitle title={title} subtitle={subtitle} />);

    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  it("does not render subtitle when not provided", () => {
    const title = "Test Title";
    render(<SectionTitle title={title} />);

    const subtitleElements = screen.queryAllByText(/./i);
    expect(subtitleElements).toHaveLength(1);
  });
});
