import React from "react";
import { render, screen } from "@testing-library/react";
import Application from "../component/Application";
import { StudentsApplication } from "../constant";

describe("Application Component", () => {
  beforeEach(() => {
    render(<Application />);
  });

  it("renders Applications heading and See all text", () => {
    expect(screen.getByText("Applications")).toBeInTheDocument();
    expect(screen.getByText("See all")).toBeInTheDocument();
  });

  it("renders mentor section with name and email", () => {
    expect(screen.getByText("Mentors")).toBeInTheDocument();
    const mentorNames = screen.getAllByText("Maxwell Smith");
    expect(mentorNames.length).toBeGreaterThan(0);
    mentorNames.forEach((name) => {
      expect(name).toBeInTheDocument();
    });

    const mentorEmails = screen.getAllByText("maxwellsmith@gmail.com");
    expect(mentorEmails.length).toBeGreaterThan(0);
    mentorEmails.forEach((email) => {
      expect(email).toBeInTheDocument();
    });
  });

  it("renders mentor tags like role, experience, location, and timezone", () => {
    expect(screen.getByText("Product Designer")).toBeInTheDocument();
    expect(screen.getByText("4years Experience")).toBeInTheDocument();
    expect(screen.getByText("Lagos, Nigeria")).toBeInTheDocument();
    expect(screen.getByText("GMT +1")).toBeInTheDocument();
  });

  it("renders student section and all students' data", () => {
    expect(screen.getByText("Students")).toBeInTheDocument();

    StudentsApplication.forEach((student) => {
      const studentNames = screen.getAllByText(student.name);
      expect(studentNames.length).toBeGreaterThan(0);
      studentNames.forEach((name) => {
        expect(name).toBeInTheDocument();
      });

      const studentEmails = screen.getAllByText(student.email);
      expect(studentEmails.length).toBeGreaterThan(0);
      studentEmails.forEach((email) => {
        expect(email).toBeInTheDocument();
      });
    });
  });

  it("renders Accept and Reject buttons for each student", () => {
    const acceptButtons = screen.getAllByText("Accept");
    const rejectButtons = screen.getAllByText("Reject");

    expect(acceptButtons.length).toBeGreaterThanOrEqual(
      StudentsApplication.length + 1
    );
    expect(rejectButtons.length).toBeGreaterThanOrEqual(
      StudentsApplication.length + 1
    );
  });
});
