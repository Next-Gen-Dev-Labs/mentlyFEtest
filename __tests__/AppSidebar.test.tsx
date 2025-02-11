import { render, screen, fireEvent } from "@testing-library/react";
import AppSidebar from "@/components/dashboard/sidebar";
import "@testing-library/jest-dom";

describe("AppSidebar Component", () => {
  const mockToggleSidebar = jest.fn();
  const mockSetActiveItem = jest.fn();
  const activeItem = "home";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly when sidebar is open", () => {
    render(
      <AppSidebar
        isSidebarOpen={true}
        toggleSidebar={mockToggleSidebar}
        activeItem={activeItem}
        setActiveItem={mockSetActiveItem}
      />
    );

    expect(screen.getByAltText("mently logo")).toBeInTheDocument();
    expect(screen.getByAltText("grid icon")).toBeInTheDocument();
  });

  it("renders all sidebar items", () => {
    render(
      <AppSidebar
        isSidebarOpen={true}
        toggleSidebar={mockToggleSidebar}
        activeItem={activeItem}
        setActiveItem={mockSetActiveItem}
      />
    );

    const menuItems = [
      "home",
      "book",
      "bubble",
      "clipboard",
      "wallet",
      "award",
      "diagram",
      "settings",
      "logout",
    ];

    menuItems.forEach((item) => {
      expect(screen.getByAltText(item)).toBeInTheDocument();
    });
  });

  it("clicking on a menu item calls setActiveItem", () => {
    render(
      <AppSidebar
        isSidebarOpen={true}
        toggleSidebar={mockToggleSidebar}
        activeItem={activeItem}
        setActiveItem={mockSetActiveItem}
      />
    );

    const homeButton = screen.getByAltText("home");
    fireEvent.click(homeButton);

    expect(mockSetActiveItem).toHaveBeenCalledWith("home");
  });

  it("closes when clicking on backdrop", () => {
    render(
      <AppSidebar
        isSidebarOpen={true}
        toggleSidebar={mockToggleSidebar}
        activeItem={activeItem}
        setActiveItem={mockSetActiveItem}
      />
    );

    const backdrop = screen.getByTestId("sidebar-backdrop");
    fireEvent.click(backdrop);

    expect(mockToggleSidebar).toHaveBeenCalledTimes(1);
  });

  it("sidebar is hidden when isSidebarOpen is false", () => {
    render(
      <AppSidebar
        isSidebarOpen={false}
        toggleSidebar={mockToggleSidebar}
        activeItem={activeItem}
        setActiveItem={mockSetActiveItem}
      />
    );

    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveClass("-translate-x-full");
  });
});
