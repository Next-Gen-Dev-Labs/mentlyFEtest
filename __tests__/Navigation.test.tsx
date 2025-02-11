import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navigation from "@/components/dashboard/navigation";

describe("Navigation Component", () => {
  it("renders the Navigation component correctly", () => {
    render(<Navigation />);

    const backToHomeText = screen.getByText(/Back to Home/i);
    expect(backToHomeText).toBeInTheDocument();

    const settingsIcon = screen.getByRole("img", { name: /settings/i });
    expect(settingsIcon).toBeInTheDocument();

    const shareButton = screen.getByText(/Share/i);
    expect(shareButton).toBeInTheDocument();
  });
});
