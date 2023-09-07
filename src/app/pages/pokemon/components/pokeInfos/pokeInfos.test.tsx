import { fireEvent, render, screen } from "@testing-library/react"
import type { IPokemon } from "../../../../shared/types"
import { PokeInfos } from ".."

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("<PokeInfos />", () => {
  const { description, genericInfos, types, pokemonStats }: IPokemon = {
    description: "A generic description",
    genericInfos: {
      id: 1,
      name: "Charmander",
      sprit: "test.com",
      height: 10,
      weight: 10
    },
    types: [{ type: "grass" }],
    pokemonStats: [
      {
        base_stat: 100,
        name: "hp"
      }
    ]
  }
  it("Page elements should be in the document", () => {
    render(
      <PokeInfos
        description={description}
        genericInfos={genericInfos}
        types={types}
        pokemonStats={pokemonStats}
      />
    )

    setTimeout(() => {
      const pokeId = screen.getByText("#1 Charmander")
      const pokeHeight = screen.getByText("Height: 10")
      const pokeWeight = screen.getByText("Weight: 10")
      const pokeDescription = screen.getByText("About: A generic description")
      const addButton = screen.getByText("Add to team")
      const stats = screen.getByText("hp:")
      const total = screen.getByText("Total: 100")
      const baseStatsTitle = screen.getByText("Base Stats")

      expect(pokeId).toBeInTheDocument()
      expect(pokeHeight).toBeInTheDocument()
      expect(pokeWeight).toBeInTheDocument()
      expect(pokeDescription).toBeInTheDocument()
      expect(addButton).toBeInTheDocument()
      expect(stats).toBeInTheDocument()
      expect(total).toBeInTheDocument()
      expect(baseStatsTitle).toBeInTheDocument()
    })
  })

  it("When button Add to team was clicked should send user to home", () => {
    render(
      <PokeInfos
        description={description}
        genericInfos={genericInfos}
        types={types}
        pokemonStats={pokemonStats}
      />
    )

    setTimeout(() => {
      const addButton = screen.getByText("Add to team")
      fireEvent.click(addButton)

      expect(mockNavigate).toBeCalledWith("/")
    }, 3000)
  })
})
