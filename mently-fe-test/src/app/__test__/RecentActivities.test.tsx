import { render, screen } from "@testing-library/react";
import RecentActivities from "../component/RecentActivities";

describe("RecentActivities Component", () => {
  beforeEach(() => {
    render(<RecentActivities />);
  });

  it("renders the Recent Activities heading", () => {
    expect(screen.getByText("Recent Activities")).toBeInTheDocument();
  });

  it("renders the 'See all' text", () => {
    expect(screen.getByText("See all")).toBeInTheDocument();
  });

  it("renders activity items with titles and descriptions", () => {
    expect(screen.getByText("KYC Verification")).toBeInTheDocument();

    expect(screen.getByText("New User Sign Up!")).toBeInTheDocument();
    expect(
      screen.getAllByText("45 new persons just signed up on Mently.").length
    ).toBeGreaterThan(0);

    expect(screen.getByText("Withdrawal Request")).toBeInTheDocument();
    expect(
      screen.getByText("Mardian requested a withdrawal.")
    ).toBeInTheDocument();
  });

  it("renders activity images", () => {
    const activityImages = screen.getAllByAltText("mentor");
    expect(activityImages.length).toBeGreaterThan(0);
  });

  it("renders timestamps for each activity", () => {
    expect(screen.getAllByText("25 minutes Ago").length).toBeGreaterThan(0);
  });
});
