import { UserProfile } from "@/components/user-profile";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

describe("UserProfile", () => {
  const defaultProps = {
    name: "John Doe",
    plan: "Free Plan",
    image: "/avatar.jpg",
  };

  it("renders user name and plan", () => {
    render(<UserProfile {...defaultProps} />);
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.plan)).toBeInTheDocument();
  });

  it("renders avatar with fallback when no image is provided", () => {
    render(<UserProfile {...{ ...defaultProps, image: undefined }} />);
    const fallback = screen.getByText("J");
    expect(fallback).toBeInTheDocument();
  });

  it("renders upgrade link", () => {
    render(<UserProfile {...defaultProps} />);
    const upgradeLink = screen.getByText("Upgrade");
    expect(upgradeLink).toBeInTheDocument();
    expect(upgradeLink).toHaveAttribute("href", "#");
    expect(upgradeLink).toHaveClass("text-custom-blue");
  });

  it("shows dropdown menu when clicked", async () => {
    render(<UserProfile {...defaultProps} />);
    const trigger = screen.getByRole("button");
    await userEvent.click(trigger);

    expect(screen.getByText("My Account")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Billing")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("hides name and plan on mobile screens", () => {
    render(<UserProfile {...defaultProps} />);
    const userInfo = screen.getByText(defaultProps.name).parentElement;
    expect(userInfo).toHaveClass("hidden");
  });
});
