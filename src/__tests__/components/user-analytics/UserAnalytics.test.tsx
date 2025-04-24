import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, within } from "../../test-utils"
import UsersAnalytics from "@/components/user-analytics/UsersAnalytics"

// Mock the dropdown menu components
vi.mock("@/components/ui/dropdown-menu", () => ({
  DropdownMenu: ({ children }: any) => <div data-testid="dropdown-menu">{children}</div>,
  DropdownMenuTrigger: ({ children }: any) => <div data-testid="dropdown-trigger">{children}</div>,
  DropdownMenuContent: ({ children }: any) => <div data-testid="dropdown-content">{children}</div>,
  DropdownMenuItem: ({ children }: any) => <div data-testid="dropdown-item">{children}</div>,
}))

// Mock the button component
vi.mock("@/components/ui/button", () => ({
  Button: ({ children, className }: any) => (
    <button data-testid="button" className={className}>
      {children}
    </button>
  ),
}))

// Mock the separator component
vi.mock("@/components/ui/separator", () => ({
  Separator: ({ className }: any) => <hr data-testid="separator" className={className} />,
}))

// Mock Lucide React icons
vi.mock("lucide-react", () => ({
  ChevronDown: () => <span data-testid="chevron-down-icon">ChevronDown</span>,
}))

describe("UsersAnalytics Component", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders the component with correct title", () => {
    render(<UsersAnalytics />)

    // Check if the title is rendered - use h2 role to be specific
    const title = screen.getByRole("heading", { level: 2 })
    expect(title).toHaveTextContent("Users")
  })

  it("renders the dropdown menu with 'All' as default selection", () => {
    render(<UsersAnalytics />)

    // Check if the dropdown trigger button shows "All"
    const button = screen.getByTestId("button")
    expect(button).toHaveTextContent("All")
    expect(screen.getByTestId("chevron-down-icon")).toBeInTheDocument()

    // Check if dropdown items are rendered
    const dropdownItems = screen.getAllByTestId("dropdown-item")
    expect(dropdownItems).toHaveLength(4)

    // Check specific dropdown items
    expect(dropdownItems[0]).toHaveTextContent("All")
    expect(dropdownItems[1]).toHaveTextContent("Students")
    expect(dropdownItems[2]).toHaveTextContent("Mentors")
    expect(dropdownItems[3]).toHaveTextContent("Programs")
  })

  it("renders the donut chart with SVG elements", () => {
    render(<UsersAnalytics />)

    // Check if SVG is rendered
    const svg = document.querySelector("svg")
    expect(svg).toBeInTheDocument()

    // Check if all circle segments are rendered
    const circles = document.querySelectorAll("circle")
    expect(circles.length).toBe(5) // 4 segments + 1 center circle

    // Check if the center text shows the total users
    const totalUsers = screen.getByText("240")
    expect(totalUsers).toBeInTheDocument()

    // Find the "Users" text in the chart center by looking for its parent
    const chartCenter = totalUsers.parentElement
    expect(chartCenter).toHaveClass("absolute")
    expect(chartCenter).toHaveClass("inset-0")

    // Now find the "Users" text within this container
    const usersText = within(chartCenter as HTMLElement).getByText("Users")
    expect(usersText).toHaveClass("text-xs")
  })

  it("renders the legend with correct user counts", () => {
    render(<UsersAnalytics />)

    // Get the legend container
    const legendContainer = screen.getByText("200").closest(".ml-4")
    expect(legendContainer).toBeInTheDocument()

    // Check counts in the legend
    expect(screen.getByText("200")).toBeInTheDocument()
    expect(screen.getByText("8")).toBeInTheDocument()
    expect(screen.getByText("22")).toBeInTheDocument()
    expect(screen.getByText("10")).toBeInTheDocument()

    // Check legend labels using within() to scope the queries
    const legendItems = legendContainer?.querySelectorAll(".flex.items-center") || []
    expect(legendItems.length).toBe(4)

    // Check first legend item (Students)
    const studentsItem = legendItems[0]
    expect(within(studentsItem as HTMLElement).getByText("Students")).toBeInTheDocument()
    expect(within(studentsItem as HTMLElement).getByText("200")).toBeInTheDocument()

    // Check second legend item (Mentors)
    const mentorsItem = legendItems[1]
    expect(within(mentorsItem as HTMLElement).getByText("Mentors")).toBeInTheDocument()
    expect(within(mentorsItem as HTMLElement).getByText("8")).toBeInTheDocument()

    // Check third legend item (Programs)
    const programsItem = legendItems[2]
    expect(within(programsItem as HTMLElement).getByText("Programs")).toBeInTheDocument()
    expect(within(programsItem as HTMLElement).getByText("22")).toBeInTheDocument()

    // Check fourth legend item (Others)
    const othersItem = legendItems[3]
    expect(within(othersItem as HTMLElement).getByText("Others")).toBeInTheDocument()
    expect(within(othersItem as HTMLElement).getByText("10")).toBeInTheDocument()
  })

  it("renders with the correct styling", () => {
    render(<UsersAnalytics />)

    // Check if the main container has the correct classes
    const container = screen.getByRole("heading", { level: 2 }).closest("div")?.parentElement
    expect(container).toHaveClass("bg-[#E7DDFF4D]")
    expect(container).toHaveClass("rounded-lg")
    expect(container).toHaveClass("border")

    // Check if the button has the correct styling
    const button = screen.getByTestId("button")
    expect(button).toHaveClass("bg-[#E7DDFF4D]")
    expect(button).toHaveClass("text-gray-700")

    // Check if the separator is rendered
    expect(screen.getByTestId("separator")).toBeInTheDocument()
  })

  it("renders the donut chart with correct segment colors", () => {
    render(<UsersAnalytics />)

    const circles = document.querySelectorAll("circle")

    // Students segment (blue)
    expect(circles[0]).toHaveAttribute("stroke", "#60A5FA")

    // Mentors segment (green)
    expect(circles[1]).toHaveAttribute("stroke", "#6EE7B7")

    // Programs segment (pink)
    expect(circles[2]).toHaveAttribute("stroke", "#FDA4AF")

    // Others segment (orange)
    expect(circles[3]).toHaveAttribute("stroke", "#FBBF24")
  })

  it("renders the legend with correct color indicators", () => {
    render(<UsersAnalytics />)

    const colorIndicators = document.querySelectorAll(".w-2.h-2.rounded-full")
    expect(colorIndicators.length).toBe(4)

    // Check color classes on indicators
    expect(colorIndicators[0]).toHaveClass("bg-blue-400")
    expect(colorIndicators[1]).toHaveClass("bg-green-300")
    expect(colorIndicators[2]).toHaveClass("bg-pink-300")
    expect(colorIndicators[3]).toHaveClass("bg-yellow-400")
  })

  it("renders the correct font styles", () => {
    render(<UsersAnalytics />)

    // Check title font
    const title = screen.getByRole("heading", { level: 2 })
    expect(title).toHaveClass("text-lg")
    expect(title).toHaveClass("font-medium")
    expect(title).toHaveClass("font-chivo")

    // Check total users font in chart center
    const totalUsers = screen.getByText("240")
    expect(totalUsers).toHaveClass("text-2xl")
    expect(totalUsers).toHaveClass("font-bold")
    expect(totalUsers).toHaveClass("font-chivo")

    // Get the legend container
    const legendContainer = screen.getByText("200").closest(".ml-4")
    expect(legendContainer).toBeInTheDocument()

    // Check legend item fonts using within() to scope the queries
    const legendItems = legendContainer?.querySelectorAll(".flex.items-center") || []

    // Check first legend item (Students) label font
    const studentsItem = legendItems[0]
    const studentsLabel = within(studentsItem as HTMLElement).getByText("Students")
    expect(studentsLabel).toHaveClass("text-[10px]")
    expect(studentsLabel).toHaveClass("font-chivo")
  })
})
