import { render, screen } from "@testing-library/react";
import { activityData } from "@/data";
import { RecentActivites } from "@/components/dashboard/activities/recent-activities";

jest.mock("../activity-card", () => ({
  ActivityCard: ({ activity }: { activity: string }) => <div>{activity}</div>,
}));

jest.mock("@/components/section-header", () => ({
  SectionHeader: ({ title }: { title: string }) => <h2>{title}</h2>,
}));

describe("RecentActivites Component", () => {
  it("renders the section title", () => {
    render(<RecentActivites />);
    expect(screen.getByText("Recent Activities")).toBeInTheDocument();
  });

  it("renders the correct number of activity cards", () => {
    render(<RecentActivites />);
    activityData.forEach((activity) => {
      expect(screen.getByText(activity.activity)).toBeInTheDocument();
    });
  });
});
