import { render, screen } from "@testing-library/react";
import ProgramInfo from "@/components/dashboard/program-info";

describe("ProgramInfo Component", () => {
  it("renders the heading", () => {
    render(<ProgramInfo />);
    expect(
      screen.getByRole("heading", { name: /program information/i })
    ).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<ProgramInfo />);
    expect(screen.getByText(/describe section title/i)).toBeInTheDocument();
  });

  it("renders the input field with correct placeholder", () => {
    render(<ProgramInfo />);
    expect(
      screen.getByPlaceholderText(
        /describe section title e\.g what you stand to learn/i
      )
    ).toBeInTheDocument();
  });

  it("renders the input images and the info section", () => {
    render(<ProgramInfo />);

    // Check that the input images exist
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(2); // t.svg & arrow-down.svg

    // Check if the Info icon (SVG) is present
    expect(screen.getByTestId("info-icon")).toBeInTheDocument();

    // Check if the description text in the info section is present
    expect(
      screen.getByText(/provide your preferred title for this section/i)
    ).toBeInTheDocument();
  });
});
