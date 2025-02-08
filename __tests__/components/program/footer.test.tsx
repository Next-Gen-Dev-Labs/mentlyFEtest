import { ProgramFooter } from "@/components/program/footer";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ProgramFooter", () => {
  it("renders buttons with correct text content", () => {
    render(<ProgramFooter />);

    expect(screen.getByText("Go Back")).toBeInTheDocument();
    expect(screen.getByText("Save & Proceed")).toBeInTheDocument();
  });
});
