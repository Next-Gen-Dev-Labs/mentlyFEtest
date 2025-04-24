import { Users } from "@/components/dashboard/users/users";
import { render, screen } from "@testing-library/react";

jest.mock("@/components/ui/select", () => ({
  Select: ({ children }: any) => <div>{children}</div>,
  SelectTrigger: ({ children }: any) => <button>{children}</button>,
  SelectValue: ({ placeholder }: any) => <span>{placeholder}</span>,
  SelectContent: ({ children }: any) => <div>{children}</div>,
  SelectItem: ({ children }: any) => <div>{children}</div>,
}));

jest.mock("./user-chart", () => ({
  UserChart: () => <div>Mocked UserChart</div>,
}));

// Motion is no-op in tests (you can skip or mock it)
jest.mock("motion/react", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useInView: () => true,
}));

describe("Users component", () => {
  it("renders the Users section title", () => {
    render(<Users />);
    expect(screen.getByText("Users")).toBeInTheDocument();
  });

  it("renders the filter select with correct options", () => {
    render(<Users />);
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("completed")).toBeInTheDocument();
    expect(screen.getByText("upcoming")).toBeInTheDocument();
  });

  it("renders the UserChart component", () => {
    render(<Users />);
    expect(screen.getByText("Mocked UserChart")).toBeInTheDocument();
  });
});
