import { fireEvent, render, screen } from "@testing-library/react"
import { PokemonFilterProvider } from ".."
import { Home } from "../../../pages"
import { MemoryRouter } from "react-router-dom"

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("pokemonFilterProvider.ts", () => {
  it("Should return a pokemon", async () => {
    jest.setTimeout(10000)
    render(
      <MemoryRouter>
        <PokemonFilterProvider>
          <Home />
        </PokemonFilterProvider>
      </MemoryRouter>
    )

    const input = screen.getByPlaceholderText(
      "Search by Name or ID"
    ) as HTMLInputElement
    const button = screen.getByTestId("search-button")

    fireEvent.keyUp(input, { target: { value: "pikachu" } })
    fireEvent.click(button)

    setTimeout(() => {
      const pokemonCard = screen.getByTestId("pokemon-card")
      expect(pokemonCard).toBeInTheDocument()
    }, 7000)
  })
})
