import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "./test-utils";
import { Layout } from "../layout";

describe("Layout", () => {
  it("renders navigation", () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );
    expect(screen.getByRole("navigation")).toBeVisible();
  });

  it("renders children content", () => {
    render(
      <Layout>
        <div data-testid="content">Test Content</div>
      </Layout>
    );
    expect(screen.getByTestId("content")).toBeVisible();
  });

  it("adjusts layout for mobile viewport", () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );
    const sidebar = screen.getByRole("complementary");
    expect(sidebar).toHaveAttribute(
      "class",
      expect.stringContaining("hidden md:block")
    );
  });
});
