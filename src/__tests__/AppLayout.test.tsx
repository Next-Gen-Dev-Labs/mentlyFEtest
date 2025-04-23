import { render, screen } from "@testing-library/react";
import Dashboard from "@/components/pages/Dashboard";

jest.mock("@/components/layout/SideBar", () => ({
  __esModule: true,
  default: ({ showSidebar }: any) => (
    <div data-testid="sidebar">Sidebar - show: {String(showSidebar)}</div>
  ),
}));

jest.mock("@/components/layout/Navbar", () => ({
  __esModule: true,
  default: ({ showSideBar }: any) => (
    <div data-testid="navbar">Navbar - show: {String(showSideBar)}</div>
  ),
}));

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

describe("AppLayout with Dashboard", () => {
  it("renders AppLayout wrapping the Dashboard sections", () => {
    render(<Dashboard />);

    // Layout check
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("navbar")).toBeInTheDocument();

    // Children (Dashboard) check
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
