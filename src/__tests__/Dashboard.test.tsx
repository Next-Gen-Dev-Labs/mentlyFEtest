import { render, screen } from "@testing-library/react";
import Dashboard from "@/components/pages/Dashboard";
import "@testing-library/jest-dom";

jest.mock("@/components/layout/AppLayout", () => ({ children }: any) => (
  <div>{children}</div>
));
jest.mock("@/components/sections/Welcome", () => () => (
  <div>Welcome Section</div>
));
jest.mock("@/components/sections/Programs", () => () => (
  <div>Programs Section</div>
));
jest.mock("@/components/sections/Users", () => () => <div>Users Section</div>);
jest.mock("@/components/sections/Widgets", () => () => (
  <div>Widgets Section</div>
));
jest.mock("@/components/sections/Calls", () => () => <div>Calls Section</div>);
jest.mock("@/components/sections/Applications", () => () => (
  <div>Applications Section</div>
));
jest.mock("@/components/sections/Mentors", () => () => (
  <div>Mentors Section</div>
));
jest.mock("@/components/sections/Activities", () => () => (
  <div>Activities Section</div>
));

describe("Dashboard", () => {
  it("renders all sections", () => {
    render(<Dashboard />);

    expect(screen.getByText("Welcome Section")).toBeInTheDocument();
    expect(screen.getByText("Programs Section")).toBeInTheDocument();
    expect(screen.getByText("Users Section")).toBeInTheDocument();
    expect(screen.getByText("Widgets Section")).toBeInTheDocument();
    expect(screen.getByText("Calls Section")).toBeInTheDocument();
    expect(screen.getByText("Applications Section")).toBeInTheDocument();
    expect(screen.getByText("Mentors Section")).toBeInTheDocument();
    expect(screen.getByText("Activities Section")).toBeInTheDocument();
  });
});
