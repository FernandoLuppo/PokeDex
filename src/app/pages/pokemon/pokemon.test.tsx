import { fireEvent, render, screen } from "@testing-library/react"
import { Pokemon } from ".."

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("<Pokemon />", () => {
  it("Page elements should be in the document", () => {
    render(<Pokemon />)

    setTimeout(() => {
      const headerTitle = screen.getByText("LuppoTW PokeDex")
      const headerLogo = screen.getByAltText("Logo")
      const headerButtonHome = screen.getByText("Home")
      const pokeDescriptionHeight = screen.getByText("Height:")
      const pokeDescriptionWeight = screen.getByText("Weight:")
      const pokeDescriptionAbout = screen.getByText("About:")
      const pokeSpritButton = screen.getByText("Add to team")
      const pokeStatsTitle = screen.getByText("Base Stats")
      const pokeStatsMediaTitle = screen.getByText("Total:")

      expect(headerTitle).toBeInTheDocument()
      expect(headerLogo).toBeInTheDocument()
      expect(headerButtonHome).toBeInTheDocument()
      expect(pokeDescriptionHeight).toBeInTheDocument()
      expect(pokeDescriptionWeight).toBeInTheDocument()
      expect(pokeDescriptionAbout).toBeInTheDocument()
      expect(pokeSpritButton).toBeInTheDocument()
      expect(pokeStatsTitle).toBeInTheDocument()
      expect(pokeStatsMediaTitle).toBeInTheDocument()
    }, 3000)
  })

  it("When button Add to team was clicked should send user to home", () => {
    render(<Pokemon />)

    setTimeout(() => {
      const addButton = screen.getByText("Add to team")
      fireEvent.click(addButton)

      expect(mockNavigate).toBeCalledWith("/")
    }, 3000)
  })
})
