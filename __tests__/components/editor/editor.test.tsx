import { Editor } from "@/components/editor/editor";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Editor", () => {
  it("renders editor toolbar", () => {
    render(<Editor />);
    const toolbar = document.querySelector(
      ".flex.flex-wrap.items-center.gap-1",
    );
    expect(toolbar).toBeInTheDocument();
  });

  it("renders editor content area", () => {
    render(<Editor />);
    const editorContent = document.querySelector(".min-h-32.border-t");
    expect(editorContent).toBeInTheDocument();
  });

  it("renders Write with May button", () => {
    render(<Editor />);
    const button = screen.getByText("Write with May");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "m-2 inline-flex items-center rounded-md bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 transition-colors hover:bg-purple-100",
    );
  });
});
