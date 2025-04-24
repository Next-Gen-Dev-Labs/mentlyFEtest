import { render, screen } from "@testing-library/react";
import ProgramCard from "../component/ProgramCard";
import { DummyPrograms } from "../constant";

describe("ProgramCard Component", () => {
  const program = DummyPrograms[0];

  it("renders program title and description", () => {
    render(<ProgramCard program={program} />);
    expect(screen.getByText(program.title)).toBeInTheDocument();
    expect(screen.getByText(program.description)).toBeInTheDocument();
  });

  it("renders action buttons with correct labels", () => {
    render(<ProgramCard program={program} />);
    expect(screen.getByText(program.actions[0].label)).toBeInTheDocument();
    expect(screen.getByText(program.actions[1].label)).toBeInTheDocument();
  });

  it("renders badge text", () => {
    render(<ProgramCard program={program} />);
    expect(screen.getByText(program.badge)).toBeInTheDocument();
  });
});
