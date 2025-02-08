import { TitleEditor } from "@/components/editor/title-editor";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("TitleEditor", () => {
  it("renders heading level selector", () => {
    render(<TitleEditor />);
    const selector = document.querySelector(
      ".w-\\[80px\\].border-2.border-dashed.border-black",
    );
    expect(selector).toBeInTheDocument();
  });

  it("renders editor content area", () => {
    render(<TitleEditor />);
    const editorContent = document.querySelector(".w-\\[87\\%\\]");
    expect(editorContent).toBeInTheDocument();
  });

  it("renders with correct container styles", () => {
    render(<TitleEditor />);
    const container = document.querySelector(
      ".flex.items-start.gap-3.rounded-lg.border.border-black.p-4",
    );
    expect(container).toBeInTheDocument();
  });

  it("displays default paragraph indicator", () => {
    render(<TitleEditor />);
    const paragraphIndicator = screen.getByText("T");
    expect(paragraphIndicator).toBeInTheDocument();
    expect(paragraphIndicator).toHaveClass("font-mono text-black");
  });
});
