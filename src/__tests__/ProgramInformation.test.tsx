import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { useMediaQuery } from "usehooks-ts";
import usePrograms from "../components/Programs/usePrograms";
import ProgramInformation from "@/components/Programs/ProgramInformation";

// Mock dependencies
jest.mock("../components/Programs/usePrograms", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("usehooks-ts", () => ({
  useMediaQuery: jest.fn(),
}));

describe("ProgramInformation Component", () => {
  beforeEach(() => {
    (usePrograms as jest.Mock).mockReturnValue({
      expandedId: null,
      handleItemClick: jest.fn(),
      isModalOpen: false,
      setIsModalOpen: jest.fn(),
    });
    (useMediaQuery as jest.Mock).mockReturnValue(true);
  });

  it("renders ProgramInformation component", () => {
    render(<ProgramInformation />);

    expect(screen.getByText("Program Information")).toBeInTheDocument();
    expect(screen.getByText("Describe Section Title")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Provide your preferred title for this section i.e What's in this Program for you?"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Provide a clear and concise description/information of your program. This can include objectives, goals, necessary resources, or any specific instructions.."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Add new section")).toBeInTheDocument();
  });

  it("renders the share button", () => {
    render(<ProgramInformation />);

    const shareButton = screen.getByText("Share");
    expect(shareButton).toBeInTheDocument();
  });

  it("opens modal when 'Save & Proceed' is clicked on mobile", () => {
    const mockSetIsModalOpen = jest.fn();
    (usePrograms as jest.Mock).mockReturnValue({
      expandedId: null,
      handleItemClick: jest.fn(),
      isModalOpen: false,
      setIsModalOpen: mockSetIsModalOpen,
    });

    (useMediaQuery as jest.Mock).mockReturnValue(false); // Simulating mobile screen

    render(<ProgramInformation />);

    const saveProceedButton = screen.getByText("Save & Proceed");
    fireEvent.click(saveProceedButton);

    expect(mockSetIsModalOpen).toHaveBeenCalledWith(true);
  });

  it("does not open modal on desktop when 'Save & Proceed' is clicked", () => {
    const mockSetIsModalOpen = jest.fn();
    (usePrograms as jest.Mock).mockReturnValue({
      expandedId: null,
      handleItemClick: jest.fn(),
      isModalOpen: false,
      setIsModalOpen: mockSetIsModalOpen,
    });

    (useMediaQuery as jest.Mock).mockReturnValue(true); // Simulating desktop screen

    render(<ProgramInformation />);

    const saveProceedButton = screen.getByText("Save & Proceed");
    fireEvent.click(saveProceedButton);

    expect(mockSetIsModalOpen).not.toHaveBeenCalled();
  });
});
