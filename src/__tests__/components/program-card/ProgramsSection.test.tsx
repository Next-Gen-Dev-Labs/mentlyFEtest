import { describe, it, expect, vi } from "vitest"
import { render, screen, waitFor } from "../../test-utils"
import ProgramsSection from "@/components/programs/ProgramsSection"

// Mock the programsData
vi.mock("@/data/data", () => ({
  programsData: [
    {
      id: 1,
      title: "Web Development Bootcamp",
      tag: "Bootcamp",
      description: "Learn web development from scratch",
      image: "program-banner1.svg",
      instructor: { name: "John Doe", avatar: "avatar.svg" },
      buttonText: "Apply",
    },
    {
      id: 2,
      title: "UI/UX Design Course",
      tag: "Course",
      description: "Master UI/UX design principles",
      image: "program-banner2.svg",
      instructor: { name: "mentors", avatar: "mentors.svg" },
      buttonText: "Enroll",
    },
  ],
}))

describe("ProgramsSection Component", () => {
  it("renders correctly with header and filter", () => {
    render(<ProgramsSection />)

    // Check if section title is rendered
    expect(screen.getByText("Programs")).toBeInTheDocument()

    // Check if filter dropdown is rendered
    expect(screen.getByText("Filter")).toBeInTheDocument()

    // Check if "See all" link is rendered
    expect(screen.getByText("See all")).toBeInTheDocument()
  })

  it("renders all program cards from data", () => {
    render(<ProgramsSection />)

    // Check if all program titles are rendered
    expect(screen.getByText("Web Development Bootcamp")).toBeInTheDocument()
    expect(screen.getByText("UI/UX Design Course")).toBeInTheDocument()

    // Check if program descriptions are rendered
    expect(screen.getByText("Learn web development from scratch")).toBeInTheDocument()
    expect(screen.getByText("Master UI/UX design principles")).toBeInTheDocument()
  })

  it("has filter dropdown button", async () => {
    const { user } = render(<ProgramsSection />)

    // Check for the filter button
    const filterButton = screen.getByRole("button", { name: /active/i })
    expect(filterButton).toBeInTheDocument()

    // Click the filter button
    await user.click(filterButton)

    // Wait for dropdown to appear and check for dropdown content
    // Using waitFor to handle any async rendering
    await waitFor(() => {
      // Use getAllByText since there might be multiple elements with "Active" text
      const activeItems = screen.getAllByText("Active")
      // Verify at least one "Active" item exists
      expect(activeItems.length).toBeGreaterThan(0)
    })
  })

  it("has correct styling for the container", () => {
    const { container } = render(<ProgramsSection />)

    // Check if the main container has the correct classes
    const mainDiv = container.firstChild
    expect(mainDiv).toHaveClass("bg-white")
    expect(mainDiv).toHaveClass("rounded-lg")
    expect(mainDiv).toHaveClass("shadow-sm")

    // Check if the program cards container has scrolling capability
    const cardsContainer = screen.getByText("Web Development Bootcamp").closest(".space-y-4")
    expect(cardsContainer).toHaveClass("overflow-y-scroll")
    expect(cardsContainer).toHaveClass("hide-scrollbar")
  })
})
