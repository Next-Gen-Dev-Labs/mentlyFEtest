import { render, screen } from "@testing-library/react";
import WelcomeBanner from "@/app/components/dashboard/WelcomeBanner";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => (
      <button {...props}>{children}</button>
    ),
  },
}));

describe("WelcomeBanner", () => {
  it("renders welcome message with user name", () => {
    render(<WelcomeBanner name="Blessing" />);

    expect(screen.getByText(/Welcome Aboard, Blessing/i)).toBeInTheDocument();
    expect(screen.getByText("Update Profile")).toBeInTheDocument();
  });
});
