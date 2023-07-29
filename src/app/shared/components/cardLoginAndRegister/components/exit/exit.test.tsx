import { fireEvent, render, screen } from "@testing-library/react"
import { Exit } from "./Exit"

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("<Exit />", () => {
  it("Should be in the document", () => {
    render(<Exit />)

    const buttonElement = screen.getByText("Home")

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent("Home")
  })

  it("Should call correctly the useNavigate function", () => {
    render(<Exit />)

    const buttonElement = screen.getByText("Home")
    fireEvent.click(buttonElement)

    expect(mockNavigate).toHaveBeenCalledWith("/")
  })

  it("Should render the new button state if screen is lower than 1000px", () => {
    Object.defineProperty(window, "innerWidth", { value: 1000 })
    render(<Exit />)

    const buttonElement = screen.getByText("Home")

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent("Home")
  })
})
