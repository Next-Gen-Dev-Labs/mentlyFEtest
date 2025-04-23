import { render, screen } from "@testing-library/react";
import AppHeader from "../AppHeader";

describe("AppHeader Component", () => {
  test("renders user name and role", () => {
    render(<AppHeader />);

    // Check if user name is present
    expect(screen.getByText("Techrity Foun...")).toBeInTheDocument();

    // Check if user role is present
    expect(screen.getByText("Member")).toBeInTheDocument();
  });

  test("header has sticky positioning", () => {
    render(<AppHeader />);

    // Check if the header has the appropriate CSS class for sticky positioning
    const headerElement = screen
      .getByText("Techrity Foun...")
      .closest("div")?.parentElement;
    expect(headerElement).toHaveClass("sticky");
    expect(headerElement).toHaveClass("top-0");
    expect(headerElement).toHaveClass("z-50");
  });
});
