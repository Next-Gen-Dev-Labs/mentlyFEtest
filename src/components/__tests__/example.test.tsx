import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Example Test", () => {
  it("should render hello text correctly", () => {
    render(<div>Hello Test</div>);
    expect(screen.getByText("Hello Test")).toBeInTheDocument();
  });

  it("should not find non-existent text", () => {
    render(<div>Hello Test</div>);
    expect(screen.queryByText("Not Here")).not.toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<div>Hello Test</div>);
    expect(container).toMatchSnapshot();
  });
});
