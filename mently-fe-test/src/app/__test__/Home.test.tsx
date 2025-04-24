import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../page";

describe("Home Component", () => {
  it("renders welcome message and Manage Widgets link", () => {
    render(<Home />);

    expect(screen.getByText(/Welcome Aboard, Blessing/i)).toBeInTheDocument();

    expect(screen.getByText(/Manage Widgets/i)).toBeInTheDocument();
  });

  it("toggles ManageWidgets modal on click", () => {
    render(<Home />);

    const toggle = screen.getByTestId("toggle-manage-widgets");
    fireEvent.click(toggle);

    const elements = screen.getAllByText(/Manage Widgets/i);
    expect(elements.length).toBeGreaterThan(1);
  });
});
