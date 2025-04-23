/* eslint-disable @next/next/no-img-element */
import { render, screen, fireEvent } from "@testing-library/react";
import "jest";
import { usePathname } from "next/navigation";
import Sidebar from "../Sidebar";
import { useSidebarContext } from "@/context/sidebar-context";

// Mock the necessary Next.js dependencies
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ src, alt, width, height, className }: any) => (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  ),
}));

// Mock the sidebar context
jest.mock("../../context/sidebar-context", () => ({
  useSidebarContext: jest.fn(),
  SidebarProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("Sidebar Component", () => {
  const mockToggleSidebar = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (usePathname as jest.Mock).mockReturnValue("/");
    (useSidebarContext as jest.Mock).mockReturnValue({
      isCollapsed: false,
      toggleSidebar: mockToggleSidebar,
    });
  });

  test("renders sidebar with logo when expanded", () => {
    render(<Sidebar />);

    // Check if the logo is visible when expanded
    expect(screen.getByAltText("Logo")).toBeInTheDocument();

    // Check if all sidebar items are rendered
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Programs")).toBeInTheDocument();
    expect(screen.getByText("Activities")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Forums")).toBeInTheDocument();
    expect(screen.getByText("Finances")).toBeInTheDocument();
    expect(screen.getByText("Rewards")).toBeInTheDocument();
    expect(screen.getByText("Analytics")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Log Out")).toBeInTheDocument();

    // Check if the toggle button is present
    expect(
      screen.getByRole("button", { name: "Collapse sidebar" })
    ).toBeInTheDocument();
  });

  test("toggles sidebar when button is clicked", () => {
    render(<Sidebar />);

    // Find and click the toggle button
    const toggleButton = screen.getByRole("button", {
      name: "Collapse sidebar",
    });
    fireEvent.click(toggleButton);

    // Verify the toggle function was called
    expect(mockToggleSidebar).toHaveBeenCalledTimes(1);
  });

  test("highlights active menu item", () => {
    // Set the current path to Dashboard
    (usePathname as jest.Mock).mockReturnValue("/");

    render(<Sidebar />);

    // Check that Dashboard has the active class (by checking for text color)
    const dashboardLink = screen.getByText("Dashboard").closest("a");
    expect(dashboardLink).toHaveClass("bg-white");
    expect(dashboardLink).toHaveClass("text-[#1F0954]");

    // Other items should not have active class
    const programsLink = screen.getByText("Programs").closest("a");
    expect(programsLink).not.toHaveClass("bg-white");
    expect(programsLink).toHaveClass("text-[#C2C2C2]");
  });

  test("renders collapsed sidebar without text labels", () => {
    // Mock the sidebar as collapsed
    (useSidebarContext as jest.Mock).mockReturnValue({
      isCollapsed: true,
      toggleSidebar: mockToggleSidebar,
    });

    render(<Sidebar />);

    // Logo should not be visible when collapsed
    expect(screen.queryByAltText("Logo")).not.toBeInTheDocument();

    // Text labels should not be visible
    expect(screen.queryByText("Dashboard")).not.toBeInTheDocument();
    expect(screen.queryByText("Programs")).not.toBeInTheDocument();

    // Toggle button should have different aria-label when collapsed
    expect(
      screen.getByRole("button", { name: "Expand sidebar" })
    ).toBeInTheDocument();
  });
});
