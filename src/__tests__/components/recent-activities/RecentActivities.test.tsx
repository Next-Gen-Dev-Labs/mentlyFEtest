import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen } from "../../test-utils"
import RecentActivities from "@/components/recent-activities/RecentActivities"

// Mock the notifications data
vi.mock("@/data/data", () => ({
  notifications: [
    {
      id: 1,
      title: "New Application",
      description: "John Doe applied for Frontend Developer position",
      timeAgo: "2 hours ago",
      avatar: "/avatars/john-doe.png",
    },
    {
      id: 2,
      title: "Program Update",
      description: "The Web Development Bootcamp has been updated",
      timeAgo: "5 hours ago",
      avatar: "/avatars/program-update.png",
    },
    {
      id: 3,
      title: "New Message",
      description: "You have a new message from Jane Smith",
      timeAgo: "1 day ago",
      avatar: "/avatars/jane-smith.png",
    },
  ],
}))

// Mock Next.js Image component
vi.mock("next/image", () => ({
  default: ({ src, alt, width, height, className }: any) => (
    <img src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className={className} />
  ),
}))

// Mock Avatar component
vi.mock("@/components/ui/avatar", () => ({
  Avatar: ({ className, children }: any) => <div className={className}>{children}</div>,
  AvatarImage: ({ src, alt }: any) => <img src={src || "/placeholder.svg"} alt={alt} data-testid="avatar-image" />,
}))

describe("RecentActivities Component", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders the component with correct title", () => {
    render(<RecentActivities />)

    // Check if the title is rendered
    expect(screen.getByText("Recent Activities")).toBeInTheDocument()
  })

  it("renders the 'See all' text", () => {
    render(<RecentActivities />)

    // Check if the "See all" text is rendered
    expect(screen.getByText("See all")).toBeInTheDocument()
  })

  it("renders the correct number of notifications from the data", () => {
    render(<RecentActivities />)

    // Check if all notification titles are rendered
    expect(screen.getByText("New Application")).toBeInTheDocument()
    expect(screen.getByText("Program Update")).toBeInTheDocument()
    expect(screen.getByText("New Message")).toBeInTheDocument()

    // Check if all notification descriptions are rendered
    expect(screen.getByText("John Doe applied for Frontend Developer position")).toBeInTheDocument()
    expect(screen.getByText("The Web Development Bootcamp has been updated")).toBeInTheDocument()
    expect(screen.getByText("You have a new message from Jane Smith")).toBeInTheDocument()

    // Check if all timeAgo texts are rendered
    expect(screen.getByText("2 hours ago")).toBeInTheDocument()
    expect(screen.getByText("5 hours ago")).toBeInTheDocument()
    expect(screen.getByText("1 day ago")).toBeInTheDocument()
  })

  it("renders avatar images for each notification", () => {
    render(<RecentActivities />)

    // Use data-testid to find avatar images
    const avatarImages = screen.getAllByTestId("avatar-image")
    expect(avatarImages).toHaveLength(3)

    // Check src attributes
    expect(avatarImages[0]).toHaveAttribute("src", "/avatars/john-doe.png")
    expect(avatarImages[1]).toHaveAttribute("src", "/avatars/program-update.png")
    expect(avatarImages[2]).toHaveAttribute("src", "/avatars/jane-smith.png")
  })

  it("renders the correct icons", () => {
    render(<RecentActivities />)

    // Check if icons are rendered
    const mobileIcon = screen.getByAltText("mobile-icon")
    const seeAllIcon = screen.getByAltText("seeAll-icon")

    expect(mobileIcon).toBeInTheDocument()
    expect(seeAllIcon).toBeInTheDocument()
  })

  it("renders with the correct styling", () => {
    render(<RecentActivities />)

    // Check if the main container has the correct classes
    const container = screen.getByText("Recent Activities").closest("div")?.parentElement
    expect(container).toHaveClass("bg-white")
    expect(container).toHaveClass("rounded-xl")
    expect(container).toHaveClass("shadow-sm")

    // Check if notification items have correct styling
    const notificationItems = screen.getAllByText(/New|Program|Message/)
    notificationItems.forEach((item) => {
      const parent = item.closest("div")?.parentElement
      expect(parent).toHaveClass("hover:bg-gray-50")
      expect(parent).toHaveClass("transition-colors")
    })
  })

  it("has correct typography styling", () => {
    render(<RecentActivities />)

    // Check title styling
    const title = screen.getByText("Recent Activities")
    expect(title).toHaveClass("text-[#B0B0B0]")
    expect(title).toHaveClass("font-bold")
    expect(title).toHaveClass("font-chivo")

    // Check notification title styling
    const notificationTitle = screen.getByText("New Application")
    expect(notificationTitle).toHaveClass("font-bold")
    expect(notificationTitle).toHaveClass("text-[#011627]")
    expect(notificationTitle).toHaveClass("font-chivo")

    // Check notification description styling
    const description = screen.getByText("John Doe applied for Frontend Developer position")
    expect(description).toHaveClass("text-[#707991]")
    expect(description).toHaveClass("font-normal")
  })

  it("renders the 'See all' link with correct styling", () => {
    render(<RecentActivities />)

    const seeAllLink = screen.getByText("See all")
    expect(seeAllLink).toHaveClass("text-[#6F01D0]")
    expect(seeAllLink).toHaveClass("font-[600]")
    expect(seeAllLink).toHaveClass("font-chivo")
  })
})
