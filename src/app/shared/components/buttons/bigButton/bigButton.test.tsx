import { fireEvent, render, screen } from "@testing-library/react"
import { BigButton } from "./BigButton"

describe("BigButton.tsx", () => {
  it("Should renders correctly with the provided text", () => {
    const buttonText = "Click Me!"
    render(<BigButton text={buttonText} />)

    const buttonElement = screen.getByRole("button", { name: buttonText })
    expect(buttonElement).toBeInTheDocument()
  })

  it("Should calls the onClick callback when clicked", () => {
    const mockOnClick = jest.fn()
    const buttonText = "Click Me!"
    render(<BigButton text={buttonText} onClick={mockOnClick} />)

    const buttonElement = screen.getByRole("button", { name: buttonText })
    fireEvent.click(buttonElement)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
