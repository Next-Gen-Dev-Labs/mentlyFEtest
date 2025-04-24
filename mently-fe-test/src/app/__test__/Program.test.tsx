/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from "@testing-library/react";
import Programs from "../component/Programs";
import { DummyPrograms } from "../constant";

jest.mock("../component/ProgramCard", () => ({
  __esModule: true,
  default: ({ program }: any) => (
    <div data-testid="program-card">{program.title}</div>
  ),
}));

describe("Programs Component", () => {
  it("renders the header and filter select", () => {
    render(<Programs />);
    expect(screen.getByText("Programs")).toBeInTheDocument();
    expect(screen.getByText("Filter")).toBeInTheDocument();
  });

  it("renders all dummy programs", () => {
    render(<Programs />);
    const cards = screen.getAllByTestId("program-card");
    expect(cards.length).toBe(DummyPrograms.length);
  });
});
