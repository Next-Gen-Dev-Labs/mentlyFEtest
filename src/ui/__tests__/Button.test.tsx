import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button Component", () => {
  test("renders button with label", () => {
    render(<Button label="Click me" type="button" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("renders with custom className", () => {
    render(
      <Button label="Custom Button" type="button" className="test-class" />
    );
    const button = screen.getByText("Custom Button");
    expect(button).toHaveClass("test-class");
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" type="button" onClick={handleClick} />);

    const button = screen.getByText("Click me");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("shows loading state", () => {
    render(<Button label="Submit" type="submit" loading={true} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.queryByText("Submit")).not.toBeInTheDocument();
  });

  test("is disabled when disabled prop is true", () => {
    render(<Button label="Disabled Button" type="button" disabled={true} />);
    const button = screen.getByText("Disabled Button");
    expect(button).toBeDisabled();
  });

  test("renders with icon when provided", () => {
    const testIcon = <span data-testid="test-icon">Icon</span>;
    render(<Button label="Icon Button" type="button" icon={testIcon} />);

    expect(screen.getByText("Icon Button")).toBeInTheDocument();
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  test("has the correct button type attribute", () => {
    render(<Button label="Submit Button" type="submit" />);
    const button = screen.getByText("Submit Button");
    expect(button).toHaveAttribute("type", "submit");
  });
});
