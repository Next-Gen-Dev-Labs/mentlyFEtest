import { describe, it, expect } from "vitest"
import { render, screen } from "../../test-utils"
import MeetingCard from "@/components/group-call/MeetingCard"

describe("MeetingCard Component", () => {
  const defaultProps = {
    id: 1,
    tag: "Ongoing",
    image: "program-banner2.svg",
  }

  it("renders correctly with ongoing tag", () => {
    render(<MeetingCard {...defaultProps} />)

    // Check if the image is rendered by finding all images and filtering by alt text
    const images = screen.getAllByTestId("next-image")
    const image = Array.from(images).find((img) => img.getAttribute("alt") === "img1")

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", "/SVGs/program-banner2.svg")

    // Check if the tag is rendered with correct styling
    const tag = screen.getByText("Ongoing")
    expect(tag).toBeInTheDocument()
    expect(tag.parentElement).toHaveClass("text-[#1F8B01]")
    expect(tag.parentElement).toHaveClass("bg-green-100")

    // Check if the title is rendered
    expect(screen.getByText("Weekly Meeting - Product Demo Review with Testers")).toBeInTheDocument()

    // Check if date and time are rendered
    expect(screen.getByText("Mon, Jul 30, 2024")).toBeInTheDocument()
    expect(screen.getByText("9:00-11:00AM")).toBeInTheDocument()

    // Check if study group and mentor info are rendered
    expect(screen.getByText("Study Group")).toBeInTheDocument()
    expect(screen.getByText("UX Strategy Study group")).toBeInTheDocument()
    expect(screen.getByText("Mentors")).toBeInTheDocument()

    // Check if buttons are rendered
    expect(screen.getByText("View Participants")).toBeInTheDocument()
    expect(screen.getByText("Join Now")).toBeInTheDocument()
  })

  it("renders correctly with upcoming tag", () => {
    render(<MeetingCard id={2} tag="Upcoming" image="meeting-banner2.svg" />)

    // Check if the tag is rendered with correct styling
    const tag = screen.getByText("Upcoming")
    expect(tag).toBeInTheDocument()
    expect(tag.parentElement).toHaveClass("text-[#1C0AE1]")
    expect(tag.parentElement).toHaveClass("bg-[#E0DDFF]")

    // Check if Join Now button is disabled for upcoming meetings
    const joinButton = screen.getByText("Join Now").closest("button")
    expect(joinButton).toHaveClass("bg-[#6F01D04D]")
    expect(joinButton).toHaveClass("cursor-not-allowed")
  })

  it("has the correct structure and styling", () => {
    const { container } = render(<MeetingCard {...defaultProps} />)

    // Check if the main container has the correct classes
    const mainDiv = container.firstChild
    expect(mainDiv).toHaveClass("w-auto")
    expect(mainDiv).toHaveClass("rounded-xl")
    expect(mainDiv).toHaveClass("bg-[#F9F7FF]")

    // Check if separator is rendered - using the correct role attribute
    const separator = screen.getByRole("none")
    expect(separator).toBeInTheDocument()
    expect(separator).toHaveClass("my-4")

    // Check if date and time container has the correct structure
    const dateElement = screen.getByText("Mon, Jul 30, 2024")
    expect(dateElement.parentElement).toHaveClass("border-r")
    expect(dateElement.parentElement).toHaveClass("border-gray-300")
  })

  it("renders action buttons with correct styling", () => {
    render(<MeetingCard {...defaultProps} />)

    // Check View Participants button
    const viewButton = screen.getByText("View Participants").closest("button")
    expect(viewButton).toHaveClass("border-[#6F01D0]")
    expect(viewButton).toHaveClass("text-[#6F01D0]")
    expect(viewButton).toHaveClass("bg-white")

    // Check Join Now button for ongoing meeting
    const joinButton = screen.getByText("Join Now").closest("button")
    expect(joinButton).toHaveClass("bg-[#6F01D0]")
    expect(joinButton).toHaveClass("cursor-pointer")
    expect(joinButton).not.toHaveClass("cursor-not-allowed")
  })
})
