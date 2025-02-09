import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import TextArea from "@/components/TextArea";

test("renders the component correctly", () => {
  render(<TextArea />);
  expect(
    screen.getByRole("textbox", { name: "program-description" })
  ).toBeDefined();
});