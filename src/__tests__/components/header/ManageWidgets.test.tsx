import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, waitFor } from "../../test-utils"
import { ManageWidgets } from "@/components/header/ManageWidgets"
import { widgetOptions } from "@/data/data"

// Mock the widgetOptions data
vi.mock("@/data/data", () => ({
  widgetOptions: [
    { id: "widget1", label: "Widget 1", defaultChecked: true },
    { id: "widget2", label: "Widget 2", defaultChecked: false },
    { id: "widget3", label: "Widget 3", defaultChecked: true },
  ],
}))

describe("ManageWidgets Component", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders the trigger button correctly", () => {
    render(<ManageWidgets />)

    const triggerButton = screen.getByRole("button", { name: /manage widgets/i })
    expect(triggerButton).toBeInTheDocument()
    expect(triggerButton).toHaveClass("font-chivo")
    expect(triggerButton).toHaveClass("text-[#1F0954]")
  })

  it("opens the sheet when trigger button is clicked", async () => {
    const { user } = render(<ManageWidgets />)

    // Click the trigger button
    const triggerButton = screen.getByRole("button", { name: /manage widgets/i })
    await user.click(triggerButton)

    // Check if sheet content is rendered
    // Note: The sheet might be rendered in a portal, so we need to use document.body
    await waitFor(() => {
      expect(screen.getByText("Manage Widget")).toBeInTheDocument()
    })

    expect(
      screen.getByText(
        "Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.",
      ),
    ).toBeInTheDocument()
  })

  it("renders all widget options with correct initial state", async () => {
    const { user } = render(<ManageWidgets />)

    // Open the sheet
    const triggerButton = screen.getByRole("button", { name: /manage widgets/i })
    await user.click(triggerButton)

    // Wait for the sheet to open
    await waitFor(() => {
      expect(screen.getByText("Manage Widget")).toBeInTheDocument()
    })

    // Check if all widget options are rendered
    for (const widget of widgetOptions) {
      expect(screen.getByText(widget.label)).toBeInTheDocument()

      const checkbox = screen.getByRole("checkbox", { name: widget.label })
      expect(checkbox).toBeInTheDocument()

      // Check if checkbox has the correct initial state
      if (widget.defaultChecked) {
        expect(checkbox).toHaveAttribute("data-state", "checked")
      } else {
        expect(checkbox).toHaveAttribute("data-state", "unchecked")
      }
    }
  })

  it("toggles widget state when checkbox is clicked", async () => {
    const { user } = render(<ManageWidgets />)

    // Open the sheet
    const triggerButton = screen.getByRole("button", { name: /manage widgets/i })
    await user.click(triggerButton)

    // Wait for the sheet to open
    await waitFor(() => {
      expect(screen.getByText("Manage Widget")).toBeInTheDocument()
    })

    // Get the first widget checkbox (which is initially checked)
    const checkbox = screen.getByRole("checkbox", { name: "Widget 1" })
    expect(checkbox).toHaveAttribute("data-state", "checked")

    // Click the checkbox to toggle it
    await user.click(checkbox)

    // Check if the state is toggled
    expect(checkbox).toHaveAttribute("data-state", "unchecked")
  })

  it("resets widgets to default state when reset button is clicked", async () => {
    const { user } = render(<ManageWidgets />)

    // Open the sheet
    const triggerButton = screen.getByRole("button", { name: /manage widgets/i })
    await user.click(triggerButton)

    // Wait for the sheet to open
    await waitFor(() => {
      expect(screen.getByText("Manage Widget")).toBeInTheDocument()
    })

    // Toggle the state of the first widget
    const checkbox1 = screen.getByRole("checkbox", { name: "Widget 1" })
    await user.click(checkbox1)
    expect(checkbox1).toHaveAttribute("data-state", "unchecked")

    // Toggle the state of the second widget
    const checkbox2 = screen.getByRole("checkbox", { name: "Widget 2" })
    await user.click(checkbox2)
    expect(checkbox2).toHaveAttribute("data-state", "checked")

    // Click the reset button
    const resetButton = screen.getByRole("button", { name: /reset to default/i })
    await user.click(resetButton)

    // Check if widgets are reset to their default state
    expect(checkbox1).toHaveAttribute("data-state", "checked")
    expect(checkbox2).toHaveAttribute("data-state", "unchecked")
  })

  it("has save changes button with correct styling", async () => {
    const { user } = render(<ManageWidgets />)

    // Open the sheet
    const triggerButton = screen.getByRole("button", { name: /manage widgets/i })
    await user.click(triggerButton)

    // Wait for the sheet to open
    await waitFor(() => {
      expect(screen.getByText("Manage Widget")).toBeInTheDocument()
    })

    // Check if save button is rendered with correct styling
    const saveButton = screen.getByRole("button", { name: /save changes/i })
    expect(saveButton).toBeInTheDocument()
    expect(saveButton).toHaveClass("bg-[#6F01D0]")
    expect(saveButton).toHaveClass("text-white")
  })
})
