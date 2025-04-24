import { describe, it, expect, vi } from "vitest"
import { render, screen } from "../../test-utils"
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
    expect(screen.getByRole("button", { name: /active/i })).toBeInTheDocument()

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

  it("opens filter dropdown when clicked", async () => {
    const { user } = render(<ProgramsSection />)

    // Click the filter dropdown button
    const filterButton = screen.getByRole("button", { name: /active/i })
    await user.click(filterButton)

    // Check if dropdown items are rendered
    expect(screen.getByText("Active")).toBeInTheDocument()
    expect(screen.getByText("Completed")).toBeInTheDocument()
    expect(screen.getByText("Upcoming")).toBeInTheDocument()
    expect(screen.getByText("All")).toBeInTheDocument()
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
