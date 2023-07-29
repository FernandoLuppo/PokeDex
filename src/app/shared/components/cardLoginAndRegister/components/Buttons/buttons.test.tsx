import { fireEvent, render, screen } from "@testing-library/react"
import { Buttons } from "./Buttons"

describe("<Buttons />", () => {
  it("Buttons should be in the document", () => {
    render(<Buttons handleLogin={() => {}} handleSingUp={() => {}} />)

    const singUp = screen.getByRole("button", { name: "Sing up" })
    const login = screen.getByRole("button", { name: "Log in" })

    expect(singUp).toBeInTheDocument()
    expect(singUp).toHaveTextContent("Sing up")
    expect(login).toBeInTheDocument()
    expect(login).toHaveTextContent("Log in")
  })

  it("Should call the click functions", () => {
    const mockHandleLogin = jest.fn()
    const mockHandleSingUp = jest.fn()

    render(
      <Buttons handleLogin={mockHandleLogin} handleSingUp={mockHandleSingUp} />
    )

    const singUp = screen.getByRole("button", { name: "Sing up" })
    const login = screen.getByRole("button", { name: "Log in" })

    fireEvent.click(singUp)
    expect(mockHandleSingUp).toBeCalledTimes(1)

    fireEvent.click(login)
    expect(mockHandleLogin).toBeCalledTimes(1)
  })

  it("Should render the new button state if screen is lower than 365px", () => {
    Object.defineProperty(window, "innerWidth", { value: 364 })
    render(<Buttons handleLogin={() => {}} handleSingUp={() => {}} />)

    const singUp = screen.getByRole("button", { name: "Sing up" })
    const login = screen.getByRole("button", { name: "Log in" })

    expect(singUp).toBeInTheDocument()
    expect(singUp).toHaveTextContent("Sing up")
    expect(login).toBeInTheDocument()
    expect(login).toHaveTextContent("Log in")
  })
})
