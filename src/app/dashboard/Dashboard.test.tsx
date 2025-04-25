import { render, screen, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";
import HomePage from "../page";
import DashboardPage from "../dashboard/page";
import "@testing-library/jest-dom";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

// Mock image imports
jest.mock("../../assets/Ellipse 56.png", () => "test-file-stub");
jest.mock("../../assets/Ellipse 56 (4).png", () => "test-file-stub");
jest.mock("../../assets/Ellipse 56 (3).png", () => "test-file-stub");
jest.mock("../../assets/Ellipse 57.png", () => "test-file-stub");

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  redirect: jest.fn(),
}));

describe("Dashboard Redirect Behavior", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should redirect to dashboard on initial render", async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    render(<HomePage />);
  });

  it("should not redirect when already on dashboard", async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    render(<DashboardPage />);

    await waitFor(() => {
      expect(mockPush).not.toHaveBeenCalled();
    });
  });
});
