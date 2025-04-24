import { render, screen } from "@testing-library/react";
import { programData } from "@/data";
import { Programs } from "@/components/dashboard/programs/programs";

// Mock necessary components
jest.mock("@/components/ui/select", () => ({
  Select: ({ children }: any) => <div>{children}</div>,
  SelectTrigger: ({ children }: any) => <button>{children}</button>,
  SelectValue: ({ placeholder }: any) => <span>{placeholder}</span>,
  SelectContent: ({ children }: any) => <div>{children}</div>,
  SelectItem: ({ children }: any) => <div>{children}</div>,
}));

jest.mock("./programCard", () => ({
  ProgramCard: ({ title }: { title: string }) => <div>{title}</div>,
}));

jest.mock("../../section-header", () => ({
  SectionHeader: ({ title }: { title: string }) => <h2>{title}</h2>,
}));

describe("Programs component", () => {
  it("renders section title", () => {
    render(<Programs />);
    expect(screen.getByText("Programs")).toBeInTheDocument();
  });

  it("renders filter dropdown", () => {
    render(<Programs />);
    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("completed")).toBeInTheDocument();
    expect(screen.getByText("upcoming")).toBeInTheDocument();
  });

  it("renders all programs", () => {
    render(<Programs />);
    programData.forEach((program) => {
      expect(screen.getByText(program.title)).toBeInTheDocument();
    });
  });
});
