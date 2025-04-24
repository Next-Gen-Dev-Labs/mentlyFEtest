import { render, screen } from "@testing-library/react"
import Header from "@/components/Header"

describe("Header", () => {
  it("renders the header with user information", () => {
    render(<Header/>)

    expect(screen.getByText("Techrity Foundation")).toBeInTheDocument()
    expect(screen.getByText("Member")).toBeInTheDocument()
  })
})
