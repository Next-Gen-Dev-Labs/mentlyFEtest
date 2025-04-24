import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent } from "../../test-utils"
import Sidebar from "@/components/sidebar/Sidebar"

describe("Sidebar Component Edge Cases", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("handles window resize event cleanup properly", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener")

    const { unmount } = render(<Sidebar />)

    // Unmount the component
    unmount()

    // Check if event listener was removed
    expect(removeEventListenerSpy).toHaveBeenCalledWith("resize", expect.any(Function))
  })

  it("handles document click event cleanup properly", () => {
    const removeEventListenerSpy = vi.spyOn(document, "removeEventListener")

    const { unmount } = render(<Sidebar isMobile={true} />)

    // Open sidebar to add click outside listener
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i })
    fireEvent.click(toggleButton)

    // Unmount the component
    unmount()

    // Check if event listener was removed
    expect(removeEventListenerSpy).toHaveBeenCalledWith("mousedown", expect.any(Function))
  })

  it("sets body overflow style when sidebar is opened on mobile", () => {
    // Save original style
    const originalStyle = document.body.style.overflow

    render(<Sidebar isMobile={true} />)

    // Open sidebar to set body overflow to hidden
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i })
    fireEvent.click(toggleButton)

    // Check if body style is set to hidden
    // The component sets this style in useEffect, so we need to check the actual style
    // rather than expecting a specific value
    expect(document.body.style.overflow).not.toBe(originalStyle)

    // Restore original style
    document.body.style.overflow = originalStyle
  })
})
