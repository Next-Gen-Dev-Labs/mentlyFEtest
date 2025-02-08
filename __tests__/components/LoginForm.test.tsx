import { LoginForm } from "@/components/login-form";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock dependencies
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

vi.mock("@/components/ui/notify-utils", () => ({
  toast: {
    loading: vi.fn(),
    success: vi.fn(),
  },
}));

vi.mock("@/lib/cookies.client", () => ({
  ClientCookies: {
    set: vi.fn(),
  },
}));

describe("LoginForm", () => {
  const mockRouter = {
    push: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useRouter as ReturnType<typeof vi.fn>).mockReturnValue(mockRouter);
  });

  it("renders login form with all elements", () => {
    render(<LoginForm />);

    expect(screen.getByTestId("login-heading")).toHaveTextContent("Login");
    expect(screen.getByTestId("login-description")).toHaveTextContent(
      "Enter any email and password below to login",
    );
    expect(screen.getByTestId("login-email")).toBeInTheDocument();
    expect(screen.getByTestId("login-password")).toBeInTheDocument();
    expect(screen.getByTestId("login-button")).toBeInTheDocument();
    expect(screen.getByTestId("login-google-button")).toBeInTheDocument();
    expect(screen.getByTestId("forgot-password-link")).toBeInTheDocument();
    expect(screen.getByTestId("signup-link")).toBeInTheDocument();
  });

  it("shows default values for email and password fields", () => {
    render(<LoginForm />);

    expect(screen.getByTestId("login-email")).toHaveValue(
      "Support@mymently.com",
    );
    expect(screen.getByTestId("login-password")).toHaveValue("required");
  });

  it("handles form submission correctly", async () => {
    render(<LoginForm />);

    const loginButton = screen.getByTestId("login-button");
    const emailInput = screen.getByTestId("login-email");
    const passwordInput = screen.getByTestId("login-password");

    // Fill in the form
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    // Submit the form
    fireEvent.click(loginButton);
  });

  it("requires email and password fields", () => {
    render(<LoginForm />);

    const emailInput = screen.getByTestId("login-email");
    const passwordInput = screen.getByTestId("login-password");

    expect(emailInput).toHaveAttribute("required");
    expect(passwordInput).toHaveAttribute("required");
  });

  it("validates email format", () => {
    render(<LoginForm />);

    const emailInput = screen.getByTestId("login-email");

    // Set invalid email
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    expect(emailInput).toBeInvalid();

    // Set valid email
    fireEvent.change(emailInput, { target: { value: "valid@email.com" } });
    expect(emailInput).toBeValid();
  });
});
