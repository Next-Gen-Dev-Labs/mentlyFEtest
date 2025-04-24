import React from "react";
import { render, screen } from "@testing-library/react";
import GroupCalls from "../component/GroupCalls";
import { DummyGroupCalls } from "../constant";

describe("GroupCalls Component", () => {
  it("renders section heading and buttons correctly", () => {
    render(<GroupCalls />);
    expect(screen.getByText("Group Calls")).toBeInTheDocument();
    expect(screen.getByText("See all")).toBeInTheDocument();
  });

  it("renders all group call titles from dummy data", () => {
    render(<GroupCalls />);
    DummyGroupCalls.forEach((groupCall) => {
      const titleElements = screen.getAllByText(groupCall.title);
      expect(titleElements.length).toBeGreaterThan(0);
    });
  });

  it("renders correct status labels", () => {
    render(<GroupCalls />);
    const statuses = DummyGroupCalls.map((g) => g.status);
    statuses.forEach((status) => {
      const statusElements = screen.getAllByText(status);
      expect(statusElements.length).toBeGreaterThan(0);
    });
  });

  it("disables Join Now button if status is upcoming", () => {
    render(<GroupCalls />);
    const joinButtons = screen.getAllByText("Join Now");
    DummyGroupCalls.forEach((groupCall, index) => {
      const button = joinButtons[index];
      if (groupCall.status === "upcoming") {
        expect(button).toBeDisabled();
      } else {
        expect(button).not.toBeDisabled();
      }
    });
  });
});
