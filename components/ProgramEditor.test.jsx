import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProgramEditor from "./ProgramEditor";

it("Should render the ProgramEditor component without errors", () => {
  render(<ProgramEditor />);

  expect(screen.getByText("Program Information")).toBeInTheDocument();
  expect(screen.getByText("Back to Home")).toBeInTheDocument();
  expect(screen.getByText("Share")).toBeInTheDocument();
  expect(screen.getByText("Describe Section Title")).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(
      "Describe Section Title e.g What you stand to learn"
    )
  ).toBeInTheDocument();
  expect(screen.getByText("+ Add new section")).toBeInTheDocument();
  expect(
    screen.getByText("Show this section when Published")
  ).toBeInTheDocument();
  expect(screen.getByText("Go Back")).toBeInTheDocument();
  expect(screen.getByText("Save & Proceed")).toBeInTheDocument();
});

it("Should render the 'Program Information' title correctly", () => {
  render(<ProgramEditor />);
  const titleElement = screen.getByText("Program Information");
  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveClass(
    "text-3xl font-extrabold mb-2 text-[#1f0954]"
  );
});

it("Should render the rich text editor with toolbar icons", () => {
  render(<ProgramEditor />);

  const richTextEditor = screen.getByPlaceholderText(
    "Describe Section Title e.g What you stand to learn"
  );
  expect(richTextEditor).toBeInTheDocument();

  const cloudUploadIcon = screen.getByTestId("cloud-upload-icon");
  const chevronDownIcon = screen.getByTestId("chevron-down-icon");
  expect(cloudUploadIcon).toBeInTheDocument();
  expect(chevronDownIcon).toBeInTheDocument();

  const toolbarIcons = screen.getAllByRole("button", { name: "" });
  expect(toolbarIcons.length).toBeGreaterThan(0);
});
describe("ProgramEditor", () => {});
