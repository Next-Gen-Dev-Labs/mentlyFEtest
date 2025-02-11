import { render, screen } from "@testing-library/react";
import { Sidebar } from "@/src/components/sidebar";
import { usePathname } from "next/navigation";
import { vi, describe, it, expect, beforeEach } from "vitest";

describe("Sidebar", () => {
  beforeEach(() => {
    vi.mock("next/navigation", () => ({
      usePathname: () => "/",
    }));
  });

  it("displays the mobile sidebar toggle button", () => {
    render(<Sidebar />);

    expect(screen.getByLabelText("Toggle mobile sidebar")).toBeInTheDocument();
  });
});
