import { describe, it, expect } from "vitest"
import { render, screen } from "../../test-utils"
import Divider from "../../../components/header/Divider"

describe("Divider Component", () => {
  it("renders correctly with all elements", () => {
    render(<Divider />)

    // Check if icons are rendered
    expect(screen.getAllByTestId("next-image")).toHaveLength(2)

    // Check if ManageWidgets component is rendered
    expect(screen.getByText("Manage Widgets")).toBeInTheDocument()
  })

  it("has the correct structure", () => {
    const { container } = render(<Divider />)

    // Check if the main container has flex and justify-between classes
    const mainDiv = container.firstChild
    expect(mainDiv).toHaveClass("flex")
    expect(mainDiv).toHaveClass("justify-between")

    // Check if the icons container has flex and gap classes
    const iconsContainer = mainDiv?.lastChild
    expect(iconsContainer).toHaveClass("flex")
    expect(iconsContainer).toHaveClass("items-center")
    expect(iconsContainer).toHaveClass("gap-6")
  })

  it("renders widget icon with correct attributes", () => {
    render(<Divider />)

    const images = screen.getAllByTestId("next-image")
    const widgetIcon = images[0]

    expect(widgetIcon).toHaveAttribute("src", "/SVGs/widget.svg")
    expect(widgetIcon).toHaveAttribute("alt", "widget_icon")
    expect(widgetIcon).toHaveAttribute("width", "30")
    expect(widgetIcon).toHaveAttribute("height", "26")
  })

  it("renders gallery icon with correct attributes", () => {
    render(<Divider />)

    const images = screen.getAllByTestId("next-image")
    const galleryIcon = images[1]

    expect(galleryIcon).toHaveAttribute("src", "/SVGs/gallery.svg")
    expect(galleryIcon).toHaveAttribute("alt", "gallery_icon")
    expect(galleryIcon).toHaveAttribute("width", "24")
    expect(galleryIcon).toHaveAttribute("height", "18")
  })
})
