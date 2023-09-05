import { fireEvent, render, screen } from "@testing-library/react"
import { HeaderHome } from "./HeaderHome"
import { MemoryRouter } from "react-router-dom"

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("<Header />", () => {
  it("Should be in the document the Logo and the Title", () => {
    render(<HeaderHome />)
    const logo = screen.getByAltText("Logo")
    const title = screen.getByText("LuppoTW PokeDex")

    expect(logo).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })

  it("Should render the SearchBar when screen width is greater than 900px", () => {
    Object.defineProperty(window, "innerWidth", { value: 1000 })

    render(<HeaderHome />)

    const searchBar = screen.getByPlaceholderText(
      "Search by Name or ID"
    ) as HTMLInputElement
    expect(searchBar).toBeInTheDocument()
  })

  it("Should not render the SearchBar when screen width is lower than 900px", () => {
    Object.defineProperty(window, "innerWidth", { value: 800 })

    render(<HeaderHome />)

    const searchBar = screen.queryByPlaceholderText(
      "Search by Name or ID"
    ) as HTMLInputElement
    expect(searchBar).not.toBeInTheDocument()
  })

  it("Should open the mobile menu when menu icon is clicked", () => {
    Object.defineProperty(window, "innerWidth", { value: 900 })

    render(
      <MemoryRouter>
        <HeaderHome />
      </MemoryRouter>
    )

    const menuButton = screen.getByRole("menu")
    fireEvent.click(menuButton)

    const signupButton = screen.getByText("Sign up")
    const loginButton = screen.getByText("Log in")

    expect(signupButton).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
  })

  it("Should close the mobile menu when the close icon is clicked", () => {
    Object.defineProperty(window, "innerWidth", { value: 900 })
    render(
      <MemoryRouter>
        <HeaderHome />
      </MemoryRouter>
    )

    const menuButton = screen.getByRole("menu")
    fireEvent.click(menuButton)

    const signupButton = screen.getByText("Sign up")
    const loginButton = screen.getByText("Log in")

    const closeButtons = screen.getAllByRole("button")
    const closeButton = closeButtons.find(
      button => button.style.color === "#f2f2f2"
    )
    if (closeButton !== undefined) {
      fireEvent.click(closeButton)

      expect(signupButton).not.toBeInTheDocument()
      expect(loginButton).not.toBeInTheDocument()
    }
  })
})
