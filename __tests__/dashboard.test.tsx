"use client"

import { render, screen, fireEvent } from "@testing-library/react"
import Dashboard from "@/components/dashboard"
import "@testing-library/jest-dom"

// Mock the components used in Dashboard
jest.mock("@/components/sidebar", () => {
  return function MockedSidebar({ isCollapsed, onToggle, isMobile, isMobileSidebarOpen, onMobileToggle }) {
    return (
      <div data-testid="sidebar" style={{ display: isMobile && !isMobileSidebarOpen ? "none" : "block" }}>
        <button onClick={onToggle} data-testid="sidebar-toggle">
          Toggle Sidebar
        </button>
        <button onClick={onMobileToggle} data-testid="mobile-sidebar-close">
          Close Mobile Sidebar
        </button>
        <div>Sidebar {isCollapsed ? "Collapsed" : "Expanded"}</div>
        <div>Mobile: {isMobile ? "Yes" : "No"}</div>
        <div>Mobile Open: {isMobileSidebarOpen ? "Yes" : "No"}</div>
      </div>
    )
  }
})

jest.mock("@/components/header", () => {
  return function MockedHeader({ isMobile, onMobileMenuToggle }) {
    return (
      <div data-testid="header">
        Header
        {isMobile && (
          <button onClick={onMobileMenuToggle} data-testid="mobile-menu-toggle">
            Toggle Mobile Menu
          </button>
        )}
      </div>
    )
  }
})

// Other mocks remain the same...
jest.mock("@/components/welcome-bar", () => {
  return function MockedWelcomeBar() {
    return <div data-testid="welcome-bar">Welcome Bar</div>
  }
})

jest.mock("@/components/programs-section", () => {
  return function MockedProgramsSection() {
    return <div data-testid="programs-section">Programs Section</div>
  }
})

jest.mock("@/components/group-calls-section", () => {
  return function MockedGroupCallsSection() {
    return <div data-testid="group-calls-section">Group Calls Section</div>
  }
})

jest.mock("@/components/applications-section", () => {
  return function MockedApplicationsSection() {
    return <div data-testid="applications-section">Applications Section</div>
  }
})

jest.mock("@/components/mentors-section", () => {
  return function MockedMentorsSection() {
    return <div data-testid="mentors-section">Mentors Section</div>
  }
})

jest.mock("@/components/users-section", () => {
  return function MockedUsersSection() {
    return <div data-testid="users-section">Users Section</div>
  }
})

jest.mock("@/components/recent-activities-section", () => {
  return function MockedRecentActivitiesSection() {
    return <div data-testid="recent-activities-section">Recent Activities Section</div>
  }
})

jest.mock("@/components/manage-widget-panel", () => {
  return function MockedManageWidgetPanel({ isOpen, onClose }) {
    return isOpen ? (
      <div data-testid="manage-widget-panel">
        <button onClick={onClose} data-testid="close-panel">
          Close Panel
        </button>
      </div>
    ) : null
  }
})

// Mock framer-motion to avoid animation issues in tests
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}))

// Mock window.innerWidth for mobile testing
const originalInnerWidth = window.innerWidth
const setMobileWidth = () => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: 500, // Mobile width
  })
  window.dispatchEvent(new Event("resize"))
}

const setDesktopWidth = () => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: 1024, // Desktop width
  })
  window.dispatchEvent(new Event("resize"))
}

describe("Dashboard Component", () => {
  afterEach(() => {
    // Reset window.innerWidth
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    })
  })

  it("renders all dashboard sections", () => {
    render(<Dashboard />)

    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    expect(screen.getByTestId("header")).toBeInTheDocument()
    expect(screen.getByTestId("welcome-bar")).toBeInTheDocument()
    expect(screen.getByTestId("programs-section")).toBeInTheDocument()
    expect(screen.getByTestId("group-calls-section")).toBeInTheDocument()
    expect(screen.getByTestId("applications-section")).toBeInTheDocument()
    expect(screen.getByTestId("mentors-section")).toBeInTheDocument()
    expect(screen.getByTestId("users-section")).toBeInTheDocument()
    expect(screen.getByTestId("recent-activities-section")).toBeInTheDocument()
  })

  it("toggles sidebar when sidebar toggle is clicked", () => {
    render(<Dashboard />)

    const sidebarToggle = screen.getByTestId("sidebar-toggle")

    // Initially sidebar is expanded
    expect(screen.getByText("Sidebar Expanded")).toBeInTheDocument()

    // Click to collapse
    fireEvent.click(sidebarToggle)
    expect(screen.getByText("Sidebar Collapsed")).toBeInTheDocument()

    // Click to expand again
    fireEvent.click(sidebarToggle)
    expect(screen.getByText("Sidebar Expanded")).toBeInTheDocument()
  })

  it("shows mobile menu toggle on mobile screens", () => {
    // Set mobile width
    setMobileWidth()

    render(<Dashboard />)

    // Mobile menu toggle should be visible
    expect(screen.getByTestId("mobile-menu-toggle")).toBeInTheDocument()
  })

  it("toggles mobile sidebar when mobile menu button is clicked", () => {
    // Set mobile width
    setMobileWidth()

    render(<Dashboard />)

    // Initially sidebar should not be visible on mobile
    expect(screen.queryByText("Mobile Open: Yes")).not.toBeInTheDocument()

    // Click mobile menu toggle
    const mobileMenuToggle = screen.getByTestId("mobile-menu-toggle")
    fireEvent.click(mobileMenuToggle)

    // Sidebar should now be visible
    expect(screen.getByText("Mobile Open: Yes")).toBeInTheDocument()

    // Click close button on sidebar
    const closeMobileButton = screen.getByTestId("mobile-sidebar-close")
    fireEvent.click(closeMobileButton)

    // Sidebar should be hidden again
    expect(screen.queryByText("Mobile Open: Yes")).not.toBeInTheDocument()
  })

  it("opens and closes manage widget panel", () => {
    render(<Dashboard />)

    // Initially panel is closed
    expect(screen.queryByTestId("manage-widget-panel")).not.toBeInTheDocument()

    // Open panel
    const manageWidgetButton = screen.getByText("Manage Widgets")
    fireEvent.click(manageWidgetButton)

    // Panel should be open
    expect(screen.getByTestId("manage-widget-panel")).toBeInTheDocument()

    // Close panel
    const closeButton = screen.getByTestId("close-panel")
    fireEvent.click(closeButton)

    // Panel should be closed
    expect(screen.queryByTestId("manage-widget-panel")).not.toBeInTheDocument()
  })
})
