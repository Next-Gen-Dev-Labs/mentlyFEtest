"use client"

import { render, screen, fireEvent } from "@testing-library/react"
import Sidebar from "@/components/sidebar"
import "@testing-library/jest-dom"

// Mock Next.js Link component
jest.mock("next/link", () => {
  return ({ href, children, ...rest }) => {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  }
})

// Mock Next.js Image component
jest.mock("next/image", () => {
  return ({ src, alt, ...props }) => {
    return <img src={src || "/placeholder.svg"} alt={alt} {...props} />
  }
})

// Mock framer-motion to avoid animation issues in tests
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}))

describe("Sidebar Component", () => {
  it("renders expanded sidebar with all navigation items", () => {
    const mockToggle = jest.fn()
    render(<Sidebar isCollapsed={false} onToggle={mockToggle} />)

    // Check logo and title
    expect(screen.getByAltText("Techrity Logo")).toBeInTheDocument()
    expect(screen.getByText("techrity")).toBeInTheDocument()

    // Check navigation items
    expect(screen.getByText("Dashboard")).toBeInTheDocument()
    expect(screen.getByText("Programs")).toBeInTheDocument()
    expect(screen.getByText("Activities")).toBeInTheDocument()
    expect(screen.getByText("Users")).toBeInTheDocument()
    expect(screen.getByText("Forums")).toBeInTheDocument()
    expect(screen.getByText("Finances")).toBeInTheDocument()
    expect(screen.getByText("Rewards")).toBeInTheDocument()
    expect(screen.getByText("Analytics")).toBeInTheDocument()
    expect(screen.getByText("Settings")).toBeInTheDocument()
    expect(screen.getByText("Log Out")).toBeInTheDocument()

    // Check help section
    expect(screen.getByText("Got some questions, enquiries or need help?")).toBeInTheDocument()
    expect(screen.getByText("Visit Mently Help Desk Here")).toBeInTheDocument()

    // Check toggle button
    expect(screen.getByText("Switch to Classic Mode")).toBeInTheDocument()
  })

  it("renders collapsed sidebar without text labels", () => {
    const mockToggle = jest.fn()
    render(<Sidebar isCollapsed={true} onToggle={mockToggle} />)

    // Logo should be visible but not the title
    expect(screen.getByAltText("Techrity Logo")).toBeInTheDocument()
    expect(screen.queryByText("techrity")).not.toBeInTheDocument()

    // Navigation text should not be visible
    expect(screen.queryByText("Dashboard")).not.toBeInTheDocument()
    expect(screen.queryByText("Programs")).not.toBeInTheDocument()

    // Help section text should not be visible
    expect(screen.queryByText("Got some questions, enquiries or need help?")).not.toBeInTheDocument()
    expect(screen.queryByText("Visit Mently Help Desk Here")).not.toBeInTheDocument()

    // Toggle text should not be visible
    expect(screen.queryByText("Switch to Classic Mode")).not.toBeInTheDocument()
  })

  it("calls onToggle when toggle button is clicked", () => {
    const mockToggle = jest.fn()
    render(<Sidebar isCollapsed={false} onToggle={mockToggle} />)

    // Find and click the toggle button
    const toggleButton = screen.getByLabelText("Collapse sidebar")
    fireEvent.click(toggleButton)

    // Check if the toggle function was called
    expect(mockToggle).toHaveBeenCalledTimes(1)
  })
})
