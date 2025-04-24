import { render, screen, fireEvent } from "@testing-library/react"
import ManageWidgetsButton from "@/components/dashboard/manage-widgets-button"
import { WidgetsProvider } from "@/components/dashboard/widgets-context"

describe("ManageWidgetsButton", () => {
  it("renders the button and opens modal when clicked", () => {
    render(
      <WidgetsProvider>
        <ManageWidgetsButton />
      </WidgetsProvider>,
    )

    // Check if button is rendered
    const button = screen.getByText("Manage Widgets")
    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(screen.getByText("Manage Widget")).toBeInTheDocument()
    expect(
      screen.getByText(
        "Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.",
      ),
    ).toBeInTheDocument()
    expect(screen.getByText("Save Changes")).toBeInTheDocument()
  })
})
