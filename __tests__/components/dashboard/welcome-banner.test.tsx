import { render, screen } from "@testing-library/react"
import WelcomeBanner from "@/components/dashboard/welcome-banner"

describe("WelcomeBanner", () => {
  it("renders the welcome message with the provided name", () => {
    render(<WelcomeBanner name="John" message="Welcome to the team!" />)

    expect(screen.getByText(/Welcome Aboard, John 👋/i)).toBeInTheDocument()
    expect(screen.getByText("Welcome to the team!")).toBeInTheDocument()
    expect(screen.getByText("Update Profile")).toBeInTheDocument()
  })
})
