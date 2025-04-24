import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent, waitFor } from "../../test-utils"
import DashboardHeader from "@/components/header/DashboardHeader"

describe("DashboardHeader Component", () => {
  beforeEach(() => {
    vi.clearAllMocks()

    // Mock window.scrollY for testing scroll behavior
    Object.defineProperty(window, "scrollY", {
      writable: true,
      configurable: true,
      value: 0,
    })
  })

  it("renders correctly with default props", () => {
    render(<DashboardHeader />)

    // Check if user name and role are rendered with default values
    expect(screen.getByText("Techrity Found...")).toBeInTheDocument()
    expect(screen.getByText("Member")).toBeInTheDocument()

    // Check if notification button is rendered
    expect(screen.getByLabelText(/you have unread notifications/i)).toBeInTheDocument()

    // Check if user dropdown trigger is rendered
    expect(screen.getByRole("button", { name: /user menu/i })).toBeInTheDocument()
  })

  it("renders correctly with custom props", () => {
    render(<DashboardHeader userName="John Doe" userRole="Admin" userImage="/custom-image.jpg" />)

    // Check if custom user role is rendered
    expect(screen.getByText("Admin")).toBeInTheDocument()

    // For the avatar, we'll check the AvatarImage component differently
    const avatarContainer = screen.getByRole("button", { name: /user menu/i })
    expect(avatarContainer).toBeInTheDocument()

    // We can verify the first letter of the userName is used in the avatar fallback
    // by checking for the text content directly
    const avatarFallbackText = screen.getByText("J")
    expect(avatarFallbackText).toBeInTheDocument()
  })

  it("renders children correctly", () => {
    render(
      <DashboardHeader>
        <div data-testid="test-child">Test Child</div>
      </DashboardHeader>,
    )

    expect(screen.getByTestId("test-child")).toBeInTheDocument()
    expect(screen.getByText("Test Child")).toBeInTheDocument()
  })

  it("adds shadow to header when scrolled", async () => {
    render(<DashboardHeader />)

    const header = screen.getByRole("banner")

    // Initially, header should not have shadow
    expect(header).not.toHaveClass("shadow-sm")

    // Simulate scroll
    Object.defineProperty(window, "scrollY", { value: 20 })
    fireEvent.scroll(window)

    // After scroll, header should have shadow
    await waitFor(() => {
      expect(header).toHaveClass("shadow-sm")
    })
  })

  it("opens notifications dropdown when clicked", async () => {
    const { user } = render(<DashboardHeader />)

    // Click notification button
    const notificationButton = screen.getByLabelText(/you have unread notifications/i)
    await user.click(notificationButton)

    // Check if dropdown content is rendered
    expect(screen.getByText("Notifications")).toBeInTheDocument()
    expect(screen.getByText("Welcome to Techrity!")).toBeInTheDocument()
    expect(screen.getByText("Complete your profile to get started.")).toBeInTheDocument()
  })

  it("opens user dropdown when clicked", async () => {
    const { user } = render(<DashboardHeader />)

    // Click user dropdown button
    const userButton = screen.getByRole("button", { name: /user menu/i })
    await user.click(userButton)

    // Check if dropdown content is rendered
    expect(screen.getByText("My Account")).toBeInTheDocument()
    expect(screen.getByText("Profile")).toBeInTheDocument()
    expect(screen.getByText("Settings")).toBeInTheDocument()
    expect(screen.getByText("Help & Support")).toBeInTheDocument()
    expect(screen.getByText("Log out")).toBeInTheDocument()
  })

  it("uses fallback avatar when no image is provided", () => {
    render(<DashboardHeader userName="John" userImage="" />)

    // Check if avatar fallback is rendered with first letter of name
    const avatarFallback = screen.getByText("J")
    expect(avatarFallback).toBeInTheDocument()
  })
})
