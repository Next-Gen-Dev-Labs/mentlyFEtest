import React from "react";
import { render } from "@testing-library/react";
import RootLayout from "./layout";

jest.mock("next/font/google", () => ({
  Chivo: jest.fn(() => ({
    className: "mocked-chivo-class",
  })),
}));

it("Should render the HTML structure with 'html' and 'body' tags", () => {
  const { container } = render(<RootLayout>Test Content</RootLayout>);

  const htmlElement = container.querySelector("html");
  const bodyElement = container.querySelector("body");

  expect(htmlElement).toBeInTheDocument();
  expect(htmlElement).toHaveAttribute("lang", "en");
  expect(bodyElement).toBeInTheDocument();
  expect(bodyElement).toHaveClass("mocked-chivo-class");
  expect(bodyElement).toHaveClass("antialiased");
  expect(bodyElement).toHaveTextContent("Test Content");
});

it("Should maintain the structure when children contain complex nested components", () => {
  const NestedComponent = () => (
    <div>
      <h1>Nested Title</h1>
      <p>Nested Paragraph</p>
    </div>
  );

  const { container } = render(
    <RootLayout>
      <NestedComponent />
      <span>Additional content</span>
    </RootLayout>
  );

  const htmlElement = container.querySelector("html");
  const bodyElement = container.querySelector("body");

  expect(htmlElement).toBeInTheDocument();
  expect(htmlElement).toHaveAttribute("lang", "en");
  expect(bodyElement).toBeInTheDocument();
  expect(bodyElement).toHaveClass("mocked-chivo-class");
  expect(bodyElement).toHaveClass("antialiased");
  expect(bodyElement).toContainHTML(
    "<div><h1>Nested Title</h1><p>Nested Paragraph</p></div>"
  );
  expect(bodyElement).toContainHTML("<span>Additional content</span>");
});
describe("RootLayout", () => {});
