import { HeaderDefault } from ".."
import { MemoryRouter } from "react-router-dom"
import { fireEvent, render, screen } from "@testing-library/react"

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("HeaderDefault.tsx", () => {
  it("Should be in the document", () => {
    render(<HeaderDefault />)

    const logo = screen.getByAltText("Logo")
    const logoText = screen.getByText("LuppoTW PokeDex")
    const homeButton = screen.getByText("Home")

    expect(logo).toBeInTheDocument()
    expect(logoText).toBeInTheDocument()
    expect(homeButton).toBeInTheDocument()
  })

  it("Should go redirect to home when user click in the logo", () => {
    render(<HeaderDefault />)

    const logo = screen.getByAltText("Logo")

    fireEvent.click(logo)

    expect(mockNavigate).toBeCalledWith("/")
  })

  it("Should go redirect to home when user click in the logo text", () => {
    render(<HeaderDefault />)

    const logoText = screen.getByText("LuppoTW PokeDex")

    fireEvent.click(logoText)

    expect(mockNavigate).toBeCalledWith("/")
  })

  it("Should open mobile menu", () => {
    Object.defineProperty(window, "innerWidth", { value: 900 })
    render(
      <MemoryRouter>
        <HeaderDefault />
      </MemoryRouter>
    )

    const menuButton = screen.getByTestId("menu")
    fireEvent.click(menuButton)

    const signupButton = screen.getByText("Sign up")
    const loginButton = screen.getByText("Log in")

    expect(signupButton).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
  })
})
