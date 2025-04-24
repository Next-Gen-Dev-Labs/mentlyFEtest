import { render, screen } from "@testing-library/react";
import { mentorRequestsdata, studentRequests } from "@/data";
import { Applications } from "@/components/dashboard/applications/applications";

jest.mock("@/components/section-header", () => ({
  SectionHeader: ({ title }: { title: string }) => <h2>{title}</h2>,
}));

jest.mock("./mentor-request-card", () => ({
  MentorRequestCard: ({ name }: { name: string }) => <div>{name}</div>,
}));

jest.mock("./student-request-card", () => ({
  StudentRequestCard: ({ name }: { name: string }) => <div>{name}</div>,
}));

describe("Applications Component", () => {
  it("renders the section title", () => {
    render(<Applications />);
    expect(screen.getByText("Applications")).toBeInTheDocument();
  });

  it("renders all mentor request cards", () => {
    render(<Applications />);
    mentorRequestsdata.forEach((mentor) => {
      expect(screen.getByText(mentor.name)).toBeInTheDocument();
    });
  });

  it("renders all student request cards", () => {
    render(<Applications />);
    studentRequests.forEach((student) => {
      expect(screen.getByText(student.name)).toBeInTheDocument();
    });
  });

  it("displays mentor and student headings", () => {
    render(<Applications />);
    expect(screen.getByText("Mentors")).toBeInTheDocument();
    expect(screen.getByText("Students")).toBeInTheDocument();
  });
});
