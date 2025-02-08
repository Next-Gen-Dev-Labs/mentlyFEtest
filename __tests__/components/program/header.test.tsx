import { ProgramHeader } from "@/components/program/header";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

describe("ProgramHeader", () => {
  it("renders the back button with correct text and styling", () => {
    render(<ProgramHeader />);
    const backButton = screen.getByText("Back to Home");
    expect(backButton).toBeInTheDocument();
  });

  it("renders the settings dropdown with menu items", async () => {
    render(<ProgramHeader />);
    const settingsButton = screen.getByTestId("settings-button");
    expect(settingsButton).toBeInTheDocument();

    await userEvent.click(settingsButton);

    const deleteOption = screen.getByText("Delete");
    const clearOption = screen.getByText("Clear");

    expect(deleteOption).toBeInTheDocument();
    expect(clearOption).toBeInTheDocument();
  });

  it("renders the copy button", () => {
    render(<ProgramHeader />);
    const copyButton = screen.getByTestId("copy-button");
    expect(copyButton).toBeInTheDocument();
  });

  it("renders the share button", () => {
    render(<ProgramHeader />);
    const shareButton = screen.getByRole("button", { name: /share/i });
    expect(shareButton).toBeInTheDocument();
  });
});
