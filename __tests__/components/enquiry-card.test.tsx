import { EnquiryCard } from "@/components/enquiry-card";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("EnquiryCard", () => {
  it("renders user icon in both collapsed and expanded states", () => {
    const { rerender } = render(<EnquiryCard isCollapsed={false} />);
    expect(screen.getByTestId("user-icon")).toBeInTheDocument();

    rerender(<EnquiryCard isCollapsed={true} />);
    expect(screen.getByTestId("user-icon")).toBeInTheDocument();
  });

  it("applies mx-auto class to icon when collapsed", () => {
    const { rerender } = render(<EnquiryCard isCollapsed={true} />);
    const icon = screen.getByTestId("user-icon");
    expect(icon).toHaveClass("mx-auto");

    rerender(<EnquiryCard isCollapsed={false} />);
    expect(icon).not.toHaveClass("mx-auto");
  });

  it("shows help text only when not collapsed", () => {
    const { rerender } = render(<EnquiryCard isCollapsed={false} />);
    expect(
      screen.getByText("Got some questions, enquiries or need help?"),
    ).toBeInTheDocument();

    rerender(<EnquiryCard isCollapsed={true} />);
    expect(
      screen.queryByText("Got some questions, enquiries or need help?"),
    ).not.toBeInTheDocument();
  });

  it("renders help desk link with correct text and href", () => {
    render(<EnquiryCard isCollapsed={false} />);
    const link = screen.getByRole("link", {
      name: "Visit Mently Help Desk Here",
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#");
    expect(link).toHaveClass("text-[#F0C074]", "underline");
  });
});
