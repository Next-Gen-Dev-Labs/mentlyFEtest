import { ProgramInformation } from "@/components/program-information";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ProgramInformation", () => {
  it("renders two cards with correct headers", () => {
    render(<ProgramInformation />);

    const headers = screen.getAllByRole("heading", { level: 2 });
    expect(headers).toHaveLength(2);
    expect(headers[0]).toHaveTextContent("Program Information Text");
    expect(headers[1]).toHaveTextContent("Program Information Text 2");
  });

  it("renders all program info items in grid format", () => {
    render(<ProgramInformation />);

    const gridItems = screen.getAllByText("Content").slice(0, 6);
    expect(gridItems).toHaveLength(6);

    const gridContainer = document.querySelector(".grid-cols-2");
    expect(gridContainer).toBeInTheDocument();
  });

  it("renders all program info items in list format", () => {
    render(<ProgramInformation />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(6);

    const list = screen.getByRole("list");
    expect(list).toHaveClass("list-disc");
  });

  it("applies correct styling to cards", () => {
    render(<ProgramInformation />);

    const cards = document.querySelectorAll(".rounded-2xl");
    expect(cards).toHaveLength(2);

    cards.forEach((card) => {
      expect(card).toHaveClass("border-[#FEE0B1]");
      expect(card).toHaveClass("bg-[#FFECCC]/30");
      expect(card).toHaveClass("shadow-transparent");
    });
  });
});
