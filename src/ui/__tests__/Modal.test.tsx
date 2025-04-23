/* eslint-disable @next/next/no-img-element */
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "../Modal";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ src, alt }: any) => (
    <img
      src={typeof src === "object" ? "/mock-image-path.jpg" : src}
      alt={alt}
      data-testid="close-icon"
    />
  ),
}));

describe("Modal Component", () => {
  const mockOnClose = jest.fn();
  const modalContent = <div>Test Modal Content</div>;

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  test("renders nothing when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={mockOnClose}>
        {modalContent}
      </Modal>
    );

    expect(screen.queryByText("Test Modal Content")).not.toBeInTheDocument();
  });

  test("renders modal content when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        {modalContent}
      </Modal>
    );

    expect(screen.getByText("Test Modal Content")).toBeInTheDocument();
  });

  test("renders close button with image", () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        {modalContent}
      </Modal>
    );

    expect(screen.getByTestId("close-icon")).toBeInTheDocument();
  });

  test("calls onClose when the close button is clicked", () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        {modalContent}
      </Modal>
    );

    const closeButton = screen.getByTestId("close-icon").closest("button");
    fireEvent.click(closeButton as HTMLElement);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("modal has fixed positioning and appropriate z-index", () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        {modalContent}
      </Modal>
    );

    const modalContainer =
      screen.getByText("Test Modal Content").parentElement?.parentElement;
    expect(modalContainer).toHaveClass("fixed");
    expect(modalContainer).toHaveClass("z-[99999]");
  });

  test("modal appears from the right side", () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        {modalContent}
      </Modal>
    );

    const modalContainer =
      screen.getByText("Test Modal Content").parentElement?.parentElement;
    expect(modalContainer).toHaveClass("justify-end");
  });
});
