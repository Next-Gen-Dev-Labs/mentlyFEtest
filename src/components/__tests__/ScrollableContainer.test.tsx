import { render, screen, fireEvent } from "@testing-library/react";
import ScrollableContainer from "../ScrollableContainer";
import { act } from "react";

// Mock react-icons
jest.mock("react-icons/io", () => ({
  IoIosArrowForward: () => <div data-testid="arrow-icon">Arrow Icon</div>,
}));

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("ScrollableContainer Component", () => {
  const mockChildrenContent = (
    <>
      <div style={{ width: "300px", height: "100px" }}>Item 1</div>
      <div style={{ width: "300px", height: "100px" }}>Item 2</div>
      <div style={{ width: "300px", height: "100px" }}>Item 3</div>
      <div style={{ width: "300px", height: "100px" }}>Item 4</div>
    </>
  );

  // Helper to mock scroll container dimensions and scroll position
  const mockScrollContainer = (
    scrollLeft = 0,
    clientWidth = 500,
    scrollWidth = 1200
  ) => {
    Object.defineProperty(HTMLElement.prototype, "scrollLeft", {
      configurable: true,
      value: scrollLeft,
    });
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: clientWidth,
    });
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: scrollWidth,
    });
  };

  afterEach(() => {
    jest.clearAllMocks();
    // Reset the mocked properties
    Object.defineProperty(HTMLElement.prototype, "scrollLeft", {
      configurable: true,
      value: 0,
    });
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 0,
    });
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 0,
    });
  });

  test("renders children content", () => {
    render(<ScrollableContainer>{mockChildrenContent}</ScrollableContainer>);

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
    expect(screen.getByText("Item 4")).toBeInTheDocument();
  });

  test("applies custom className when provided", () => {
    render(
      <ScrollableContainer className="test-class">
        {mockChildrenContent}
      </ScrollableContainer>
    );

    const container = screen.getByText("Item 1").parentElement;
    expect(container).toHaveClass("test-class");
  });

  test("shows right arrow when content overflows", () => {
    // Mock a scenario where content overflows to the right
    mockScrollContainer(0, 500, 1200);

    render(<ScrollableContainer>{mockChildrenContent}</ScrollableContainer>);

    // Force re-render and state updates after mocking
    const scrollContainer = screen.getByText("Item 1").parentElement;
    act(() => {
      fireEvent.scroll(scrollContainer as Element);
    });

    // Check for right arrow presence
    const rightArrow = screen.queryByLabelText("Scroll right");
    expect(rightArrow).toBeInTheDocument();
  });

  test("shows left arrow when scrolled right", () => {
    // Mock a scrolled position
    mockScrollContainer(100, 500, 1200);

    render(<ScrollableContainer>{mockChildrenContent}</ScrollableContainer>);

    // Force re-render and state updates after mocking
    const scrollContainer = screen.getByText("Item 1").parentElement;
    act(() => {
      fireEvent.scroll(scrollContainer as Element);
    });

    // Check for left arrow presence
    const leftArrow = screen.queryByLabelText("Scroll left");
    expect(leftArrow).toBeInTheDocument();
  });

  test("does not show arrows when content fits container", () => {
    // Mock a scenario where content fits in container
    mockScrollContainer(0, 500, 500);

    render(<ScrollableContainer>{mockChildrenContent}</ScrollableContainer>);

    // Force re-render and state updates after mocking
    const scrollContainer = screen.getByText("Item 1").parentElement;
    act(() => {
      fireEvent.scroll(scrollContainer as Element);
    });

    // Check that arrows are not present
    const leftArrow = screen.queryByLabelText("Scroll left");
    const rightArrow = screen.queryByLabelText("Scroll right");

    expect(leftArrow).not.toBeInTheDocument();
    expect(rightArrow).not.toBeInTheDocument();
  });

  test("scrolls left when left arrow is clicked", () => {
    // Mock a scrolled position
    mockScrollContainer(300, 500, 1200);

    render(<ScrollableContainer>{mockChildrenContent}</ScrollableContainer>);

    // Force re-render and state updates after mocking
    const scrollContainer = screen.getByText("Item 1").parentElement;
    act(() => {
      fireEvent.scroll(scrollContainer as Element);
    });

    const scrollByMock = jest.fn();
    Object.defineProperty(HTMLDivElement.prototype, "scrollBy", {
      configurable: true,
      value: scrollByMock,
    });

    // Click the left arrow button
    const leftArrow = screen.getByLabelText("Scroll left");
    fireEvent.click(leftArrow);

    // Verify scrollBy was called with correct parameters
    expect(scrollByMock).toHaveBeenCalledWith({
      left: -300,
      behavior: "smooth",
    });

    // Reset the mock
    Object.defineProperty(HTMLDivElement.prototype, "scrollBy", {
      configurable: true,
      value: function () {},
    });
  });

  test("scrolls right when right arrow is clicked", () => {
    // Mock a position where right arrow should be visible
    mockScrollContainer(0, 500, 1200);

    render(<ScrollableContainer>{mockChildrenContent}</ScrollableContainer>);

    // Force re-render and state updates after mocking
    const scrollContainer = screen.getByText("Item 1").parentElement;
    act(() => {
      fireEvent.scroll(scrollContainer as Element);
    });

    const scrollByMock = jest.fn();
    Object.defineProperty(HTMLDivElement.prototype, "scrollBy", {
      configurable: true,
      value: scrollByMock,
    });

    // Click the right arrow button
    const rightArrow = screen.getByLabelText("Scroll right");
    fireEvent.click(rightArrow);

    // Verify scrollBy was called with correct parameters
    expect(scrollByMock).toHaveBeenCalledWith({
      left: 300,
      behavior: "smooth",
    });

    // Reset the mock
    Object.defineProperty(HTMLDivElement.prototype, "scrollBy", {
      configurable: true,
      value: function () {},
    });
  });
});
