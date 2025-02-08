import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProgramPage from "./ProgramInfo";
import ProgramEditor from "./ProgramEditor";
import ProgramPreview from "./ProgramPreview";

describe("ProgramPage", () => {});

it("Should render a div with minimum height of screen and white background", () => {
  render(<ProgramPage />);
  const mainDiv = screen.getByRole("main");
  expect(mainDiv).toHaveClass("min-h-screen bg-white");
});

it("Should apply padding of 6 units to the main container", () => {
  render(<ProgramPage />);
  const mainDiv = screen.getByRole("main");
  expect(mainDiv).toHaveClass("p-6");
});

it("Should apply a top margin of 16 units to the main container", () => {
  render(<ProgramPage />);
  const mainDiv = screen.getByRole("main");
  expect(mainDiv).toHaveClass("mt-16");
});
