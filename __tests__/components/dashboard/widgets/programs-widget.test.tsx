import { render, screen, fireEvent } from "@testing-library/react"
import ProgramsWidget from "@/components/dashboard/widgets/programs-widget"
import { WidgetsProvider } from "@/components/dashboard/widgets-context"

describe("ProgramsWidget", () => {
  it("renders the programs widget with filter and program cards", () => {
    render(
      <WidgetsProvider>
        <ProgramsWidget />
      </WidgetsProvider>,
    )

    // Check widget title
    expect(screen.getByText("Programs")).toBeInTheDocument()

    // Check filter
    expect(screen.getByText("Filter")).toBeInTheDocument()
    expect(screen.getByText("Active")).toBeInTheDocument()

    // Check program cards (should show active programs by default)
    expect(screen.getByText("Fundamentals of User Interface & Experience")).toBeInTheDocument()
    expect(screen.getByText("Colour Hack Practical Group Call")).toBeInTheDocument()

    // Check action buttons
    expect(screen.getAllByText("View Details").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Explore").length).toBeGreaterThan(0)
  })

  it("filters programs when filter is changed", () => {
    render(
      <WidgetsProvider>
        <ProgramsWidget />
      </WidgetsProvider>,
    )

    // Open filter dropdown
    fireEvent.click(screen.getByText("Active"))

    // Select "All" filter
    fireEvent.click(screen.getByText("All"))

    // Should show all programs including upcoming ones
    expect(screen.getAllByText("Colour Hack Practical Group Call").length).toBe(2)
    expect(screen.getByText("Accept Mentor")).toBeInTheDocument()
  })
})
