import { render, screen } from "@testing-library/react";
import { mentorData } from "@/data";
import { Mentors } from "@/components/dashboard/mentors/mentors";

jest.mock("next/image", () => (props: any) => <img {...props} />);
jest.mock("@/components/ui/button", () => ({
  Button: (props: any) => <button {...props}>{props.children}</button>,
}));
jest.mock("./mentor-card", () => ({
  MentorCard: ({ name }: { name: string }) => <div>{name}</div>,
}));

describe("Mentors component", () => {
  it("renders the header and title", () => {
    render(<Mentors />);
    expect(screen.getByText("Mentors")).toBeInTheDocument();
  });

  it("renders all mentor cards", () => {
    render(<Mentors />);
    mentorData.forEach((mentor) => {
      expect(screen.getByText(mentor.name)).toBeInTheDocument();
    });
  });

  it("renders the 'See all' button", () => {
    render(<Mentors />);
    expect(
      screen.getByRole("button", { name: /see all/i })
    ).toBeInTheDocument();
  });
});
