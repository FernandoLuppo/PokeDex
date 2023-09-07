import { CardStats } from ".."
import type { IPokemon } from "../../../../../../shared/types"
import { render, screen } from "@testing-library/react"

describe("<CardStats />", () => {
  it("Should be in the document a stats section with pokemon infos", () => {
    const pokemon: IPokemon[] = [
      {
        isUserTeam: true,
        genericInfos: {
          id: 1,
          name: "bulbasaur",
          sprit: "bulbasaurSpriteTest"
        },
        pokemonStats: [
          {
            base_stat: 100,
            name: "hp"
          }
        ]
      }
    ]
    render(<CardStats pokemonStats={pokemon} />)

    const pokemonName = screen.getByText("bulbasaur")
    const pokemonNameStats = screen.getByText("hp:")
    const pokemonBaseStats = screen.getByText("100")
    const pokemonAverageStats = screen.getByText("total: 100")

    expect(pokemonName).toBeInTheDocument()
    expect(pokemonNameStats).toBeInTheDocument()
    expect(pokemonBaseStats).toBeInTheDocument()
    expect(pokemonAverageStats).toBeInTheDocument()
  })

  it("Should show a empty pokemon stats section", () => {
    const pokemon: IPokemon[] = [
      {
        isUserTeam: false
      }
    ]
    render(<CardStats pokemonStats={pokemon} />)

    const emptyCard = screen.getByText("Empty")

    expect(emptyCard).toBeInTheDocument()
  })
})
