import type React from "react"
import type { ReactElement } from "react"
import { render, type RenderOptions, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

// Mock providers if needed
const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  return {
    user: userEvent.setup(),
    ...render(ui, {
      wrapper: AllProviders,
      ...options,
    }),
  }
}

// Helper to mock server component rendering
export const renderServerComponent = async (Component: any, props = {}) => {
  const ComponentWithProps = () => <Component {...props} />
  return render(<ComponentWithProps />)
}

// Custom render function that includes providers if needed
// const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
//   return {
//     user: userEvent.setup(),
//     ...render(ui, options),
//   }
// }

// Add the custom getByAttribute helper function
const getByAttribute = (container: HTMLElement, attribute: string, value: string) => {
  const elements = container.querySelectorAll(`[${attribute}="${value}"]`)
  if (elements.length === 0) {
    throw new Error(`Cannot find element with attribute ${attribute}="${value}"`)
  }
  return elements[0]
}

// Add the custom query to screen
const customScreen = {
  ...screen,
  getByAttribute: (attribute: string, value: string) => getByAttribute(document.body, attribute, value),
}

export * from "@testing-library/react"
export { customRender as render, customScreen as screen }
