import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProgramPreview from "./ProgramPreview";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    li: ({ children, ...props }) => <li {...props}>{children}</li>,
  },
}));

describe("ProgramPreview", () => {});

it("Should render the correct date and time in the header", () => {
  render(<ProgramPreview />);
  const dateTimeElement = screen.getByText(
    "13th February 2024, 12:15 PM (Local time)."
  );
  expect(dateTimeElement).toBeInTheDocument();
});

it("Should display the 'Mentorship Program' title", () => {
  render(<ProgramPreview />);
  const titleElement = screen.getByText("Mentorship Program");
  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveClass(
    "text-4xl font-extrabold text-[#1f0954] mb-3"
  );
});

it("Should display the program description text", () => {
  render(<ProgramPreview />);
  const descriptionElement = screen.getByText(
    "UI/UX Design check ins with faith is a way for beginners in UI/UX Design to get advice about the fundamentals and how they can build a Design Career, share, document their progress on a weekly basis."
  );
  expect(descriptionElement).toBeInTheDocument();
  expect(descriptionElement).toHaveClass("text-gray-600 mb-8 w-72");
});
