import { AuthProvider } from "./AuthProvider"
import { AuthRequire } from ".."
import { render, screen } from "@testing-library/react"

describe("AuthProvider.tsx", () => {
  it("Should render the component correctly", () => {
    const text = "test"

    render(
      <AuthProvider>
        <AuthRequire>
          <div>{text}</div>
        </AuthRequire>
      </AuthProvider>
    )

    const element = screen.getByText(text)
    expect(element).toHaveTextContent(text)
  })
})
