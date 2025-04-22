import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";
import { act } from "react-dom/test-utils";

jest.mock("@/components/SideBar", () => {
  return function DummySideBar({ isOpen, toggleSidenav }) {
    return <div data-testid="sidebar">SideBar</div>;
  };
});

jest.mock("@/components/Header", () => {
  return function DummyHeader({ isOpen, toggleSidenav }) {
    return <div data-testid="header">Header</div>;
  };
});

jest.mock("@/components/ProgramInfo", () => {
  return function DummyProgramPage() {
    return <div data-testid="program-page">ProgramPage</div>;
  };
});

describe("Home component", () => {});

it("should open sidebar when window width is 768px or greater", () => {
  // Mock window.innerWidth
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: 800,
  });

  // Trigger the resize event
  act(() => {
    window.dispatchEvent(new Event("resize"));
  });

  render(<Home />);

  // Check if the sidebar is open
  const sidebar = screen.getByTestId("sidebar");
  expect(sidebar).toBeInTheDocument();

  // Check if the main content has the correct class
  const mainContent = screen.getByTestId("header").parentElement;
  expect(mainContent).toHaveClass("md:ml-52");
});

it("should remove overlay when sidebar is closed on mobile devices", () => {
  // Mock window.innerWidth for mobile device
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: 600,
  });

  // Trigger the resize event
  act(() => {
    window.dispatchEvent(new Event("resize"));
  });

  render(<Home />);

  // Open the sidebar
  const header = screen.getByTestId("header");
  fireEvent.click(header);

  // Check if the overlay is present
  let overlay = screen.getByTestId("overlay");
  expect(overlay).toBeInTheDocument();

  // Close the sidebar
  fireEvent.click(overlay);

  // Check if the overlay is removed
  overlay = screen.queryByTestId("overlay");
  expect(overlay).not.toBeInTheDocument();
});
