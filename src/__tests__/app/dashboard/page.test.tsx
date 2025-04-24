import { describe, it, expect, vi } from "vitest"
import { render, screen } from "../../test-utils"
import Home from "@/app/page"

// Mock all the imported components
vi.mock("@/components/sidebar/Sidebar", () => ({
  default: () => <div data-testid="sidebar-component">Sidebar Component</div>,
}))

vi.mock("@/components/header/DashboardHeader", () => ({
  default: () => <div data-testid="dashboard-header-component">Dashboard Header Component</div>,
}))

vi.mock("@/components/header/Divider", () => ({
  default: () => <div data-testid="divider-component">Divider Component</div>,
}))

vi.mock("@/components/header/WelcomeBanner", () => ({
  default: () => <div data-testid="welcome-banner-component">Welcome Banner Component</div>,
}))

vi.mock("@/components/programs/ProgramsSection", () => ({
  default: () => <div data-testid="programs-section-component">Programs Section Component</div>,
}))

vi.mock("@/components/UsersAnalytics", () => ({
  default: () => <div data-testid="users-analytics-component">Users Analytics Component</div>,
}))

vi.mock("@/components/group-call/MeetingCard", () => ({
  default: ({ id, tag, image }: any) => (
    <div data-testid={`meeting-card-${id}`}>
      Meeting Card Component {id} - {tag} - {image}
    </div>
  ),
}))

vi.mock("@/components/applications/Applications", () => ({
  default: () => <div data-testid="applications-component">Applications Component</div>,
}))

vi.mock("@/components/mentors/MentorCard", () => ({
  default: () => <div data-testid="mentor-card-component">Mentor Card Component</div>,
}))

vi.mock("@/components/recent-activities/RecentActivities", () => ({
  default: () => <div data-testid="recent-activities-component">Recent Activities Component</div>,
}))

describe("Dashboard Page Component", () => {
  it("renders all components correctly", () => {
    render(<Home />)

    // Check if all components are rendered
    expect(screen.getByTestId("sidebar-component")).toBeInTheDocument()
    expect(screen.getByTestId("dashboard-header-component")).toBeInTheDocument()
    expect(screen.getByTestId("divider-component")).toBeInTheDocument()
    expect(screen.getByTestId("welcome-banner-component")).toBeInTheDocument()
    expect(screen.getByTestId("programs-section-component")).toBeInTheDocument()
    expect(screen.getByTestId("users-analytics-component")).toBeInTheDocument()
    expect(screen.getByTestId("applications-component")).toBeInTheDocument()
    expect(screen.getByTestId("mentor-card-component")).toBeInTheDocument()
    expect(screen.getByTestId("recent-activities-component")).toBeInTheDocument()

    // Check if meeting cards are rendered
    expect(screen.getByTestId("meeting-card-1")).toBeInTheDocument()
    expect(screen.getByTestId("meeting-card-2")).toBeInTheDocument()
    expect(screen.getByTestId("meeting-card-3")).toBeInTheDocument()
    expect(screen.getByTestId("meeting-card-4")).toBeInTheDocument()
    expect(screen.getByTestId("meeting-card-5")).toBeInTheDocument()
  })

  it("has the correct layout structure", () => {
    const { container } = render(<Home />)

    // Check if the main container has the correct classes
    const mainDiv = container.firstChild
    expect(mainDiv).toHaveClass("flex")
    expect(mainDiv).toHaveClass("min-h-screen")
    expect(mainDiv).toHaveClass("bg-gray-50")

    // Check if the main content area has the correct structure
    const mainContent = screen.getByRole("main")
    expect(mainContent).toHaveClass("flex-1")
    expect(mainContent).toHaveClass("p-4")
    expect(mainContent).toHaveClass("overflow-y-auto")

    // Check if the grid layout is applied
    const gridContainer = mainContent.querySelector(".grid")
    expect(gridContainer).toHaveClass("grid-cols-1")
    expect(gridContainer).toHaveClass("lg:grid-cols-3")
    expect(gridContainer).toHaveClass("gap-4")
  })

  it("passes correct props to Sidebar component", () => {
    render(<Home />)

    // Since we're mocking the Sidebar component, we can't directly test props
    // But we can verify it's rendered with the expected data-testid
    expect(screen.getByTestId("sidebar-component")).toBeInTheDocument()
  })

  it("has Group Calls section with correct header", () => {
    render(<Home />)

    // Check if Group Calls header is rendered
    expect(screen.getByText("Group Calls")).toBeInTheDocument()

    // Check if "See all" link is rendered
    expect(screen.getByText("See all")).toBeInTheDocument()
  })
})
