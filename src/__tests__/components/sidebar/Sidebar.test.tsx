import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { render, screen, fireEvent, waitFor } from "../../test-utils"
import Sidebar from "@/components/sidebar/Sidebar"

describe("Sidebar Component", () => {
  // Mock window.innerWidth for testing responsive behavior
  const setWindowWidth = (width: number) => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: width,
    })
    window.dispatchEvent(new Event("resize"))
  }

  beforeEach(() => {
    // Reset mocks and window properties before each test
    vi.clearAllMocks()
  })

  afterEach(() => {
    // Clean up after each test
    vi.restoreAllMocks()
  })

  it("renders correctly with default props", () => {
    render(<Sidebar />)

    // Check if logo is rendered
    expect(screen.getByAltText("techrity_logo")).toBeInTheDocument()

    // Check if navigation links are rendered
    expect(screen.getByText("Dashboard")).toBeInTheDocument()
    expect(screen.getByText("Programs")).toBeInTheDocument()
    expect(screen.getByText("Activities")).toBeInTheDocument()

    // Check if help section is rendered
    expect(screen.getByText("Got some questions, enquiries or need help?")).toBeInTheDocument()
    expect(screen.getByText("Visit Mently Help Desk Here")).toBeInTheDocument()

    // Check if classic mode toggle is rendered
    expect(screen.getByText("Switch to Classic Mode")).toBeInTheDocument()
    expect(screen.getByRole("switch")).toBeInTheDocument()
  })

  it("toggles classic mode when switch is clicked", async () => {
    const { user } = render(<Sidebar />)

    const switchElement = screen.getByRole("switch")
    expect(switchElement).toHaveAttribute("aria-checked", "false")

    await user.click(switchElement)

    expect(switchElement).toHaveAttribute("aria-checked", "true")
  })

  it("renders in mobile view when isMobile prop is true", () => {
    render(<Sidebar isMobile={true} />)

    // In mobile view, the sidebar should be hidden initially
    const sidebar = screen.getByRole("complementary", { hidden: true }) // Use role instead of data-testid
    expect(sidebar).toHaveClass("-translate-x-full")

    // Toggle button should be visible
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i })
    expect(toggleButton).toBeInTheDocument()
  })

  it("opens and closes sidebar on mobile when toggle button is clicked", async () => {
    const { user } = render(<Sidebar isMobile={true} />)

    const toggleButton = screen.getByRole("button", { name: /toggle menu/i })
    const sidebar = screen.getByAttribute("data-sidebar", "true") // Use data-sidebar attribute

    // Initially sidebar should be hidden
    expect(sidebar).toHaveClass("-translate-x-full")

    // Click toggle button to open sidebar
    await user.click(toggleButton)

    // Sidebar should be visible
    expect(sidebar).toHaveClass("translate-x-0")
    expect(sidebar).not.toHaveClass("-translate-x-full")

    // Close button should be visible
    const closeButton = screen.getByRole("button", { name: /close menu/i })
    expect(closeButton).toBeInTheDocument()

    // Click close button to close sidebar
    await user.click(closeButton)

    // Sidebar should be hidden again
    expect(sidebar).toHaveClass("-translate-x-full")
  })

  it("responds to window resize events", async () => {
    // Mock the useEffect for window resize
    const resizeSpy = vi.spyOn(window, "addEventListener")

    render(<Sidebar />)

    // Check if event listener was added
    expect(resizeSpy).toHaveBeenCalledWith("resize", expect.any(Function))

    // Simulate resize to mobile width
    setWindowWidth(600)

    // Wait for state update
    await waitFor(() => {
      const sidebar = screen.getByAttribute("data-sidebar", "true")
      expect(sidebar).toHaveClass("fixed")
    })

    // Simulate resize to desktop width
    setWindowWidth(1200)

    // Wait for state update
    await waitFor(() => {
      const sidebar = screen.getByAttribute("data-sidebar", "true")
      expect(sidebar).toHaveClass("w-64")
    })
  })

  it("closes sidebar when clicking outside on mobile", async () => {
    render(<Sidebar isMobile={true} />)

    const toggleButton = screen.getByRole("button", { name: /toggle menu/i })

    // Open sidebar
    fireEvent.click(toggleButton)

    // Sidebar should be visible
    const sidebar = screen.getByAttribute("data-sidebar", "true")
    expect(sidebar).toHaveClass("translate-x-0")

    // Click outside sidebar
    fireEvent.mouseDown(document.body)

    // Sidebar should be hidden
    await waitFor(() => {
      expect(sidebar).toHaveClass("-translate-x-full")
    })
  })

  it("navigates when links are clicked", async () => {
    const { user } = render(<Sidebar />)

    // Find dashboard link
    const dashboardLink = screen.getByRole("link", { name: /dashboard/i })

    // Click on link
    await user.click(dashboardLink)

    // Since we're mocking Next.js router, we just verify the link has the correct href
    expect(dashboardLink).toHaveAttribute("href", "/dashboard")
  })
})

// Add a custom getByAttribute helper function to test-utils.tsx
