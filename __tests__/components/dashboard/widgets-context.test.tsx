"use client"

import { render, screen, fireEvent } from "@testing-library/react"
import { WidgetsProvider, useWidgets } from "@/components/dashboard/widgets-context"

// Test component that uses the widgets context
function TestComponent() {
  const { widgets, updateWidget, resetToDefault } = useWidgets()

  return (
    <div>
      <div data-testid="programs-value">{widgets.programs.toString()}</div>
      <div data-testid="earnings-value">{widgets.earnings.toString()}</div>
      <button onClick={() => updateWidget("programs", false)}>Toggle Programs</button>
      <button onClick={resetToDefault}>Reset</button>
    </div>
  )
}

describe("WidgetsContext", () => {
  it("provides default widget values", () => {
    render(
      <WidgetsProvider>
        <TestComponent />
      </WidgetsProvider>,
    )

    expect(screen.getByTestId("programs-value")).toHaveTextContent("true")
    expect(screen.getByTestId("earnings-value")).toHaveTextContent("false")
  })

  it("updates widget values when updateWidget is called", () => {
    render(
      <WidgetsProvider>
        <TestComponent />
      </WidgetsProvider>,
    )

    // Initially programs is true
    expect(screen.getByTestId("programs-value")).toHaveTextContent("true")

    // Click to toggle programs to false
    fireEvent.click(screen.getByText("Toggle Programs"))

    // Now programs should be false
    expect(screen.getByTestId("programs-value")).toHaveTextContent("false")
  })

  it("resets to default values when resetToDefault is called", () => {
    render(
      <WidgetsProvider>
        <TestComponent />
      </WidgetsProvider>,
    )

    // Toggle programs to false
    fireEvent.click(screen.getByText("Toggle Programs"))
    expect(screen.getByTestId("programs-value")).toHaveTextContent("false")

    // Reset to default
    fireEvent.click(screen.getByText("Reset"))

    // Programs should be back to true
    expect(screen.getByTestId("programs-value")).toHaveTextContent("true")
  })
})
