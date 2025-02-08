import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../ui/button";

describe("Button", () => {
  it("renders button with children content", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it("renders button with destructive variant", () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole("button", { name: /delete/i });
    expect(button).toBeInTheDocument();
  });

  it("renders button with small size", () => {
    render(<Button size="sm">Small Button</Button>);
    const button = screen.getByRole("button", { name: /small button/i });
    expect(button).toBeInTheDocument();
  });

  it("renders as anchor when asChild prop is true", () => {
    render(
      <Button asChild>
        <a href="#">Link Button</a>
      </Button>
    );
    const link = screen.getByRole("link", { name: /link button/i });
    expect(link).toBeInTheDocument();
  });

  it("accepts custom className", () => {
    render(<Button className="test-class">Custom Button</Button>);
    const button = screen.getByRole("button", { name: /custom button/i });
    expect(button).toBeInTheDocument();
  });
});
