import { render, screen } from "@testing-library/react";
import ProgramBanner from "@/components/ProgramBanner";

describe("ProgramBanner Component", () => {
  it("renders the heading", () => {
    render(<ProgramBanner />);
    expect(screen.getByRole("heading", { name: /Mastering the work life Equation/i })).toBeInTheDocument();
});

  it("renders the input images and the info section", () => {
    render(<ProgramBanner />);

    // Check that the input images exist
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(1); // mentor.png

    // Check if the image description text has author name present
    expect(screen.getByText(/Nwachukwu Peculiar/i)).toBeInTheDocument();
  });
});