import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Infocard from ".";

jest.mock("lucide-react", () => ({
  FileText: () => <svg data-testid="icon-filetext" />,
  Users: () => <svg data-testid="icon-users" />,
  Phone: () => <svg data-testid="icon-phone" />,
  Briefcase: () => <svg data-testid="icon-briefcase" />,
  Clock: () => <svg data-testid="icon-clock" />,
  Laptop: () => <svg data-testid="icon-laptop" />,
}));

describe("Infocard Component", () => {
  const resizeWindow = (width: number) => {
    window.innerWidth = width;
    window.dispatchEvent(new Event("resize"));
  };
  test("renders the title correctly", () => {
    render(<Infocard />);
    expect(screen.getByText(/Program Information Text 2/i)).toBeInTheDocument();
  });

  test("renders list variant correctly", () => {
    render(<Infocard variant="list" />);
    const listItems = screen.getAllByText(/Content/i);
    expect(listItems.length).toBe(6); 
  });

  test("renders grid variant correctly", () => {
    render(<Infocard variant="grid" />);
    const gridItems = screen.getAllByText(/Content/i);
    expect(gridItems.length).toBe(6); 
  });
});
