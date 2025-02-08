import { Logo } from "@/components/logo";
import { render, screen, within, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, ...props }: { children: React.ReactNode }) => (
    <a {...props}>{children}</a>
  ),
}));

// Cleanup after each test
afterEach(() => {
  cleanup();
});

describe("Logo Component", () => {
  it("renders logo image correctly", () => {
    render(<Logo href="/" />);
    const logoImage = screen.getByAltText("logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("renders logo text by default", () => {
    render(<Logo href="/" />);
    const logoLink = screen.getByTestId("logo-link-id");
    const logoText = within(logoLink).getByTestId("logo-image-id");
    expect(logoLink).toContainElement(logoText);
  });

  it("hides logo text when showText is false", () => {
    render(<Logo href="/" showText={false} />);
    expect(screen.queryByTestId("logo-text-icon")).not.toBeInTheDocument();
  });

  it("renders link with correct href", () => {
    const href = "/dashboard";
    render(<Logo href={href} />);
    const link = screen.getByTestId("logo-link-id");
    expect(link).toHaveAttribute("href", href);
  });
});
