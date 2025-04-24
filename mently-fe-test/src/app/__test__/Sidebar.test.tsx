import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../component/Sidebar";

describe("Sidebar Component", () => {
  it("renders sidebar items and responds to clicks", () => {
    render(<Sidebar />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();

    const programsLink = screen.getByText("Programs");
    expect(programsLink).toBeInTheDocument();

    fireEvent.click(programsLink);
  });

  it("renders the classic mode toggle", () => {
    render(<Sidebar />);

    const toggle = screen.getByTestId("switch");
    expect(toggle).toBeInTheDocument();

    fireEvent.click(toggle);
  });
});
