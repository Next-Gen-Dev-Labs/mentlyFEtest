import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../component/Navbar";

describe("Navbar", () => {
  it("renders the menu icon on small screens", () => {
    render(<Navbar />);
    const menuIcon = screen.getByTestId("menu-icon");
    expect(menuIcon).toBeInTheDocument();
  });

  it("renders the Navbar component correctly", () => {
    render(<Navbar />);

    expect(screen.getByTestId("notifications-icon")).toBeInTheDocument();

    expect(screen.getByText("Texhrity Founder")).toBeInTheDocument();
    expect(screen.getByText("Member")).toBeInTheDocument();
  });

  it("toggles sidebar when menu icon is clicked", () => {
    render(<Navbar />);
    const menuIcon = screen.getByTestId("menu-icon");

    expect(screen.queryByText(/Member/i)).not.toBeNull();

    fireEvent.click(menuIcon);

    const overlay = screen.getByTestId("sidebar-overlay");
    expect(overlay).toBeInTheDocument();
  });
});
