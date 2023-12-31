import { ErrorMessage } from "./ErrorMessage"
import { render, screen } from "@testing-library/react"

describe("ErrorMessage.tsx", () => {
  it("Should be in the document", () => {
    render(<ErrorMessage />)

    const errorMessage = screen.getByText("Pokemon not found")
    const img = screen.getByAltText("sad-result")

    expect(errorMessage).toBeInTheDocument()
    expect(img).toBeInTheDocument()
  })
})
