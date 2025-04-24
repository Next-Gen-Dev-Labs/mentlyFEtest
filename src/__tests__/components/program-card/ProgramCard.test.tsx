import { describe, it, expect } from "vitest"
import { render, screen } from "../../test-utils"
import ProgramCard from "@/components/programs/ProgramCard"

describe("ProgramCard Component", () => {
  const defaultProps = {
    id: 1,
    title: "Test Program",
    tag: "Bootcamp",
    description: "This is a test program description",
    image: "test-image.svg",
    instructor: {
      name: "John Doe",
      avatar: "avatar.svg",
    },
    settings: true,
    buttonText: "Apply",
  }

  it("renders correctly with bootcamp tag", () => {
    render(<ProgramCard {...defaultProps} />)

    // Check if title is rendered
    expect(screen.getByText("Test Program")).toBeInTheDocument()

    // Check if tag is rendered with correct styling
    const tag = screen.getByText("Bootcamp")
    expect(tag).toBeInTheDocument()
    expect(tag.parentElement).toHaveClass("bg-[#D4E0F3]")
    expect(tag).toHaveClass("text-[#0077FF]")

    // Check if description is rendered
    expect(screen.getByText("This is a test program description")).toBeInTheDocument()

    // Check if instructor info is rendered
    expect(screen.getByText("Hosted By: John Doe")).toBeInTheDocument()

    // Check if buttons are rendered
    expect(screen.getByText("View Details")).toBeInTheDocument()
    expect(screen.getByText("Apply")).toBeInTheDocument()
  })

  it("renders correctly with course tag", () => {
    render(<ProgramCard {...defaultProps} tag="Course" />)

    // Check if tag is rendered with correct styling
    const tag = screen.getByText("Course")
    expect(tag).toBeInTheDocument()
    expect(tag.parentElement).toHaveClass("bg-[#D4F3D4]")
    expect(tag).toHaveClass("text-[#008000]")
  })

  it("renders settings icon when settings prop is true", () => {
    render(<ProgramCard {...defaultProps} settings={true} />)

    // Check if settings icon is rendered
    const settingsIcon = screen.getByTestId("next-image")
    expect(settingsIcon).toHaveAttribute("src", "/SVGs/settings.svg")
    expect(settingsIcon).toHaveAttribute("alt", "settings-icon")
  })

  it("does not render settings icon when settings prop is false", () => {
    render(<ProgramCard {...defaultProps} settings={false} />)

    // Check that settings icon is not rendered
    const images = screen.getAllByTestId("next-image")
    const settingsIcon = Array.from(images).find((img) => img.getAttribute("alt") === "settings-icon")
    expect(settingsIcon).toBeUndefined()
  })

  it('renders instructor name differently when name is "mentors"', () => {
    render(<ProgramCard {...defaultProps} instructor={{ name: "mentors", avatar: "mentors.svg" }} />)

    // Check if mentors text is rendered with correct styling
    const mentorsText = screen.getByText("mentors")
    expect(mentorsText).toBeInTheDocument()
    expect(mentorsText).toHaveClass("font-bold")
    expect(mentorsText).not.toHaveClass("font-normal")
  })

  it("renders buttons with correct styling", () => {
    render(<ProgramCard {...defaultProps} />)

    // Check View Details button
    const viewButton = screen.getByText("View Details").closest("button")
    expect(viewButton).toHaveClass("border-[#6F01D0]")
    expect(viewButton).toHaveClass("text-[#6F01D0]")
    expect(viewButton).toHaveClass("bg-transparent")

    // Check Apply button
    const applyButton = screen.getByText("Apply").closest("button")
    expect(applyButton).toHaveClass("bg-[#6F01D0]")
    expect(applyButton).toHaveClass("text-white")
  })

  it("renders custom button text", () => {
    render(<ProgramCard {...defaultProps} buttonText="Enroll Now" />)

    // Check if custom button text is rendered
    expect(screen.getByText("Enroll Now")).toBeInTheDocument()
  })
})
