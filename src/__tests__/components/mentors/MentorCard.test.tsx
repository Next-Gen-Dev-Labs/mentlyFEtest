import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen } from "../../test-utils"
import MentorCard from "@/components/mentors/MentorCard"

// Mock the users data
vi.mock("@/data/data", () => ({
  users: [
    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      avatar: "/avatars/john-doe.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UI/UX Designer",
      avatar: "/avatars/jane-smith.png",
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "Backend Developer",
      avatar: "/avatars/bob-johnson.png",
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

describe("MentorCard Component", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders the component with correct title", () => {
    render(<MentorCard />)

    // Check if the title is rendered
    expect(screen.getByText("Mentors")).toBeInTheDocument()
  })

  it("renders the correct number of mentors from the data", () => {
    render(<MentorCard />)

    // Check if all mentor names are rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument()
    expect(screen.getByText("Jane Smith")).toBeInTheDocument()
    expect(screen.getByText("Bob Johnson")).toBeInTheDocument()

    // Check if all mentor roles are rendered
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument()
    expect(screen.getByText("UI/UX Designer")).toBeInTheDocument()
    expect(screen.getByText("Backend Developer")).toBeInTheDocument()

    // Check if the correct number of message buttons are rendered
    const messageButtons = screen.getAllByText("Message")
    expect(messageButtons).toHaveLength(3)
  })

  it("renders avatar images for each mentor", () => {
    render(<MentorCard />)

    // Use data-testid to find avatar images
    const avatarImages = screen.getAllByTestId("avatar-image")
    expect(avatarImages).toHaveLength(3)

    // Check src attributes
    expect(avatarImages[0]).toHaveAttribute("src", "/avatars/john-doe.png")
    expect(avatarImages[1]).toHaveAttribute("src", "/avatars/jane-smith.png")
    expect(avatarImages[2]).toHaveAttribute("src", "/avatars/bob-johnson.png")
  })

  it("renders the 'See all' button", () => {
    render(<MentorCard />)

    const seeAllButton = screen.getByRole("button", { name: /see all/i })
    expect(seeAllButton).toBeInTheDocument()
    expect(seeAllButton).toHaveClass("bg-[#DDD6FB]")
    expect(seeAllButton).toHaveClass("text-[#6F01D0]")
  })

  it("renders the correct icons", () => {
    render(<MentorCard />)

    // Check if icons are rendered
    const icons = screen.getAllByRole("img")

    // Filter only the specific icons we're looking for
    const mobileIcon = icons.find((icon) => icon.getAttribute("alt") === "mobile-icon")
    const plusIcon = icons.find((icon) => icon.getAttribute("alt") === "plus-icon")
    const seeAllIcon = icons.find((icon) => icon.getAttribute("alt") === "seeAll-icon")

    expect(mobileIcon).toBeInTheDocument()
    expect(plusIcon).toBeInTheDocument()
    expect(seeAllIcon).toBeInTheDocument()
  })

  it("has clickable message buttons for each mentor", async () => {
    const { user } = render(<MentorCard />)

    const messageButtons = screen.getAllByText("Message")
    expect(messageButtons[0]).toHaveClass("bg-[#6F01D0]")
    expect(messageButtons[0]).toHaveClass("text-[#F1EEFF]")

    // Test clicking the first message button
    await user.click(messageButtons[0])

    // Since there's no actual click handler in the component, we're just verifying
    // that the button is clickable and doesn't throw errors
    expect(messageButtons[0]).toBeInTheDocument()
  })

  it("has a clickable 'See all' button", async () => {
    const { user } = render(<MentorCard />)

    const seeAllButton = screen.getByRole("button", { name: /see all/i })

    // Test clicking the See all button
    await user.click(seeAllButton)

    // Since there's no actual click handler in the component, we're just verifying
    // that the button is clickable and doesn't throw errors
    expect(seeAllButton).toBeInTheDocument()
  })

  it("renders with the correct styling", () => {
    render(<MentorCard />)

    // Check if the main container has the correct classes
    const container = screen.getByText("Mentors").closest("div")?.parentElement
    expect(container).toHaveClass("bg-white")
    expect(container).toHaveClass("rounded-2xl")
    expect(container).toHaveClass("shadow")

    // Check if message buttons have correct styling
    const messageButtons = screen.getAllByText("Message")
    expect(messageButtons[0]).toHaveClass("bg-[#6F01D0]")
    expect(messageButtons[0]).toHaveClass("rounded-[16px]")
  })
})
