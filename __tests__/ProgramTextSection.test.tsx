import { render, screen } from "@testing-library/react";
import ProgramTextSection from "@/components/dashboard/program-text-section";

describe("ProgramTextSection Component", () => {
  const testText = "Sample Program Text";

  it("renders the provided text", () => {
    render(<ProgramTextSection text={testText} />);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it("renders the ChevronUp and EllipsisVertical icons", () => {
    render(<ProgramTextSection text={testText} />);

    expect(screen.getByTestId("chevron-icon")).toBeInTheDocument();

    expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
  });
});
