import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "@/components/dashboard/header";

describe("Header Component", () => {
  it("renders the user profile image, name, and plan info", () => {
    render(<Header toggleSidebar={jest.fn()} />);

    // Check if the profile image is rendered
    const profileImage = screen.getByAltText("User Profile");
    expect(profileImage).toBeInTheDocument();

    // Check if the user name is rendered
    expect(screen.getByText(/Godwin Jimmy/i)).toBeInTheDocument();

    // Check if the plan info is displayed
    expect(screen.getByText(/Free Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/Upgrade/i)).toBeInTheDocument();
  });

  it("renders the notification bell with the red dot", () => {
    render(<Header toggleSidebar={jest.fn()} />);

    // Select the bell icon using a test ID or role
    const bellIcon = screen.getByTestId("notification-bell");
    expect(bellIcon).toBeInTheDocument();

    // Check if the notification dot exists
    const notificationDot = screen.getByTestId("notification-dot");
    expect(notificationDot).toBeInTheDocument();
  });

  it("calls toggleSidebar when the menu button is clicked", async () => {
    const toggleSidebarMock = jest.fn();
    render(<Header toggleSidebar={toggleSidebarMock} />);
    const user = userEvent.setup();

    // Click the menu button
    const menuButton = screen.getByRole("button");
    await user.click(menuButton);

    // Expect the toggleSidebar function to be called
    expect(toggleSidebarMock).toHaveBeenCalledTimes(1);
  });
});
