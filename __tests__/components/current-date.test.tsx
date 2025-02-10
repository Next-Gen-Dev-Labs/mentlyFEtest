import { CurrentDate } from "@/components/curent-date";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("CurrentDate", () => {
  it("renders the date correctly", () => {
    const testDate = "2024-01-01";
    render(<CurrentDate date={testDate} />);
    expect(screen.getByText(testDate)).toBeInTheDocument();
  });

  it("applies default styling", () => {
    const testDate = "2024-01-01";
    const { container } = render(<CurrentDate date={testDate} />);
    const dateElement = container.firstChild as HTMLElement;
    expect(dateElement).toHaveClass("text-sm");
    expect(dateElement).toHaveClass("text-[#809FB8]");
  });

  it("applies custom className when provided", () => {
    const testDate = "2024-01-01";
    const customClass = "custom-class";
    const { container } = render(
      <CurrentDate date={testDate} className={customClass} />,
    );
    const dateElement = container.firstChild as HTMLElement;
    expect(dateElement).toHaveClass(customClass);
    expect(dateElement).toHaveClass("text-sm");
    expect(dateElement).toHaveClass("text-[#809FB8]");
  });
});
