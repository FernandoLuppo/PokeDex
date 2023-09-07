import { Button } from "./Button"
import { fireEvent, render, screen } from "@testing-library/react"

describe("<Button />", () => {
  it("Should be in the document with the right text", () => {
    const buttonText = "Click Me!"
    render(<Button text={buttonText} isbig={undefined} />)

    const buttonElement = screen.getByRole("button", { name: buttonText })

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent(buttonText)
  })

  it("Should call the onClick function correctly", () => {
    const buttonText = "Click Me!"
    const mockClick = jest.fn()
    render(<Button text={buttonText} onClick={mockClick} isbig={undefined} />)

    const buttonElement = screen.getByRole("button", { name: buttonText })
    fireEvent.click(buttonElement)

    expect(mockClick).toBeCalledTimes(1)
  })
})
