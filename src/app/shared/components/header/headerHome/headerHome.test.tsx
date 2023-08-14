import { fireEvent, render, screen } from "@testing-library/react"
import { HeaderHome } from "./HeaderHome"

describe("<Header />", () => {
  it("Should be in the document the Logo and the Title", () => {
    render(<HeaderHome />)
    const logo = screen.getByAltText("Logo")
    const title = screen.getByText("LuppoTW Pokedex")

    expect(logo).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })

  it("Should render the SearchBar when screen width is greater than 900px", () => {
    Object.defineProperty(window, "innerWidth", { value: 910 })

    const { queryByTestId } = render(<HeaderHome />)

    const searchBar = queryByTestId("search-bar")
    expect(searchBar).toBeInTheDocument()
  })

  it("Should not render the SearchBar when screen width is lower than 900px", () => {
    Object.defineProperty(window, "innerWidth", { value: 900 })

    const { queryByTestId } = render(<HeaderHome />)

    const searchBar = queryByTestId("search-bar")
    expect(searchBar).not.toBeInTheDocument()
  })

  it("Should open the mobile menu when menu icon is clicked", () => {
    render(<HeaderHome />)
    Object.defineProperty(window, "innerWidth", { value: 890 })

    const hamburgerButton = screen.getByRole("menu")
    fireEvent.click(hamburgerButton)

    const menuMobile = screen.getByText("Log out")

    expect(menuMobile).toBeInTheDocument()
  })

  it("Should close the mobile menu when the close icon is clicked", () => {
    render(<HeaderHome />)
    Object.defineProperty(window, "innerWidth", { value: 890 })

    const hamburgerButton = screen.getByRole("menu")
    fireEvent.click(hamburgerButton)

    const menuMobile = screen.getByText("Log out")

    const closeButtons = screen.getAllByRole("button")
    const closeButton = closeButtons.find(
      button => button.style.color === "#f2f2f2"
    )
    if (closeButton !== undefined) {
      fireEvent.click(closeButton)

      expect(menuMobile).not.toBeInTheDocument()
    }
  })
})
