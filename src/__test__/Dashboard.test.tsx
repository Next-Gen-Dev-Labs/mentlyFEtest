import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Dashboard from "@/app/Dashboard";

test("Pages Router", () => {
  render(<Dashboard />);
  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("heading", { level: 1, name: /Mently Dashboard/i })
  ).toBeDefined();
});
