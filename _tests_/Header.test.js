import { render, screen } from "@testing-library/react"
import Header from "@/components/Header";
 
describe("Header Component", () => {
  it("renders the user profile image, name, and plan info", () => {
    render(<Header />);

    // Check if the profile image is rendered
    const profileAvatar = screen.getByAltText("User Avatar");
    expect(profileAvatar).toBeInTheDocument();

    // Check if the user name is rendered
    expect(screen.getByText(/Godwin Jimmy/i)).toBeInTheDocument();

    // Check if the plan info is displayed
    expect(screen.getByText(/Free Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/Upgrade/i)).toBeInTheDocument();
  });
})