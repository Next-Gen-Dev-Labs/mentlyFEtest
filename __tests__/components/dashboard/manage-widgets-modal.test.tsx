"use client"

import { render, screen, fireEvent } from "@testing-library/react"
import { ManageWidgetsModal } from "@/components/dashboard/manage-widgets-modal"
import { WidgetsProvider } from "@/components/dashboard/widgets-context"

describe("ManageWidgetsModal", () => {
  const mockOnClose = jest.fn()

  beforeEach(() => {
    mockOnClose.mockClear()
  })

  it("renders nothing when isOpen is false", () => {
    const { container } = render(
      <WidgetsProvider>
        <ManageWidgetsModal isOpen={false} onClose={mockOnClose} />
      </WidgetsProvider>,
    )

    expect(container).toBeEmptyDOMElement()
  })

  it("renders the modal when isOpen is true", () => {
    render(
      <WidgetsProvider>
        <ManageWidgetsModal isOpen={true} onClose={mockOnClose} />
      </WidgetsProvider>,
    )

    expect(screen.getByText("Manage Widget")).toBeInTheDocument()
    expect(screen.getByText("Programs")).toBeInTheDocument()
    expect(screen.getByText("Group Calls")).toBeInTheDocument()
    expect(screen.getByText("Reset to Default")).toBeInTheDocument()
    expect(screen.getByText("Save Changes")).toBeInTheDocument()
  })

  it("calls onClose when close button is clicked", () => {
    render(
      <WidgetsProvider>
        <ManageWidgetsModal isOpen={true} onClose={mockOnClose} />
      </WidgetsProvider>,
    )

    const closeButton = screen.getByRole("button", { name: "" }) // The X button has no text
    fireEvent.click(closeButton)

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it("calls onClose when Save Changes button is clicked", () => {
    render(
      <WidgetsProvider>
        <ManageWidgetsModal isOpen={true} onClose={mockOnClose} />
      </WidgetsProvider>,
    )

    const saveButton = screen.getByText("Save Changes")
    fireEvent.click(saveButton)

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })
})
