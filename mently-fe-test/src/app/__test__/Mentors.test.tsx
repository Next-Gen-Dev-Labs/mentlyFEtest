import { render, screen } from "@testing-library/react";
import Mentors from "../component/Mentors";

describe("Mentors Component", () => {
  beforeEach(() => {
    render(<Mentors />);
  });

  it("renders the Mentors heading", () => {
    expect(screen.getByText("Mentors")).toBeInTheDocument();
  });

  it("renders mentor information with names and roles", () => {
    expect(screen.getByText("Maxwell Smith")).toBeInTheDocument();

    expect(screen.getByText("Adeati Samuel")).toBeInTheDocument();
    expect(screen.getAllByText("Product Designer").length).toBeGreaterThan(0);
  });

  it("renders mentor profile images", () => {
    const mentorImages = screen.getAllByAltText("mentor");
    expect(mentorImages.length).toBeGreaterThan(0);
  });

  it("renders the 'Message' button for each mentor", () => {
    const messageButtons = screen.getAllByText("Message");
    expect(messageButtons.length).toBeGreaterThan(0);
  });

  it("renders the 'See All' button", () => {
    const seeAllButton = screen.getByText("See All");
    expect(seeAllButton).toBeInTheDocument();
  });
});
