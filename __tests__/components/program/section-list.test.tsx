import { ProgramCreatedList } from "@/components/program/program-created-list";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

describe("ProgramCreatedList", () => {
  it("renders program information sections", () => {
    render(<ProgramCreatedList />);

    expect(screen.getByText("Program Information Text 1")).toBeInTheDocument();
    expect(screen.getByText("Program Information Text 2")).toBeInTheDocument();
  });

  it("shows dropdown menu when clicking more options", async () => {
    render(<ProgramCreatedList />);
    const user = userEvent.setup();

    const moreButtons = screen.getAllByRole("button", {
      name: "",
    });
    await user.click(moreButtons[0]);

    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  it("expands accordion item when clicked", async () => {
    render(<ProgramCreatedList />);
    const user = userEvent.setup();

    const accordionTrigger = screen.getByText("Program Information Text 1");
    await user.click(accordionTrigger);

    expect(
      screen.getByText("Content for Program Information Text 1"),
    ).toBeInTheDocument();
  });

  it("collapses expanded accordion item when clicked again", async () => {
    render(<ProgramCreatedList />);
    const user = userEvent.setup();

    const accordionTrigger = screen.getByText("Program Information Text 1");
    await user.click(accordionTrigger);
    await user.click(accordionTrigger);

    const content = screen.queryByText(
      "Content for Program Information Text 1",
    );
    expect(content).not.toBeInTheDocument();
  });
});
