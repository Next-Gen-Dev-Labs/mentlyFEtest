import { ClassicMode } from "@/components/classic-mode";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ClassicMode", () => {
  it("should render Switch component in both collapsed and expanded states", () => {
    const { rerender } = render(<ClassicMode isCollapsed={false} />);

    expect(screen.getByRole("switch")).toBeInTheDocument();

    expect(screen.getByText("Switch to Classic Mode")).toBeInTheDocument();

    rerender(<ClassicMode isCollapsed={true} />);

    expect(screen.getByRole("switch")).toBeInTheDocument();

    expect(
      screen.queryByText("Switch to Classic Mode"),
    ).not.toBeInTheDocument();
  });

  it("should apply correct margin classes based on isCollapsed prop", () => {
    const { rerender } = render(<ClassicMode isCollapsed={false} />);

    // Check expanded state classes
    const expandedContainer = screen.getByRole("switch").parentElement;
    expect(expandedContainer).toHaveClass("mt-7");
    expect(expandedContainer).not.toHaveClass("mx-auto");

    // Re-render with collapsed state
    rerender(<ClassicMode isCollapsed={true} />);

    // Check collapsed state classes
    const collapsedContainer = screen.getByRole("switch").parentElement;
    expect(collapsedContainer).toHaveClass("mx-auto");
    expect(collapsedContainer).toHaveClass("mt-4");
  });
});
