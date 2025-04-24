import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen } from "../../test-utils"
import DashboardHeader from "@/components/header/DashboardHeader"

describe("DashboardHeader Component Edge Cases", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("handles window scroll event cleanup properly", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener")

    const { unmount } = render(<DashboardHeader />)

    // Unmount the component
    unmount()

    // Check if event listener was removed
    expect(removeEventListenerSpy).toHaveBeenCalledWith("scroll", expect.any(Function))
  })

  it("handles empty userName gracefully", () => {
    render(<DashboardHeader userName="" />)

    // Check if avatar fallback exists and has the correct structure
    // Using the class selector instead of data-slot
    const avatarFallback = document.querySelector(
      ".flex.size-full.items-center.justify-center.rounded-full.bg-purple-100",
    )
    expect(avatarFallback).toBeInTheDocument()
    // Empty username should result in empty avatar fallback
    expect(avatarFallback?.textContent?.trim()).toBe("")
  })

  it("handles extremely long userName and userRole", () => {
    const longName = "This is an extremely long user name that should be handled gracefully by the component"
    const longRole = "This is an extremely long user role that should be handled gracefully by the component"

    render(<DashboardHeader userName={longName} userRole={longRole} />)

    // Check if text is rendered and not causing layout issues
    // We can't check for exact truncation in jsdom, but we can check if it's rendered
    expect(screen.getByText(longRole)).toBeInTheDocument()
  })
})
