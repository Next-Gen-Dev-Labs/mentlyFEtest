import { render, screen } from "@testing-library/react";
import { groupCalldata } from "@/data";
import { GroupCalls } from "@/components/dashboard/group-calls/group-calls";

jest.mock("@/components/section-header", () => ({
  SectionHeader: ({ title }: { title: string }) => <h2>{title}</h2>,
}));

jest.mock("./group-call-card", () => ({
  GroupCallCard: ({ title }: { title: string }) => <div>{title}</div>,
}));

describe("GroupCalls Component", () => {
  it("renders the section title", () => {
    render(<GroupCalls />);
    expect(screen.getByText("Group Calls")).toBeInTheDocument();
  });

  it("renders all group call cards from data", () => {
    render(<GroupCalls />);
    groupCalldata.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
