import { PokemonStats } from ".."
import type { IPokemon } from "../../../../shared/types"
import { render, screen } from "@testing-library/react"

describe("<PokemonStats />", () => {
  it("Should be more than one pokemon stats section in the document whit pokemon infos", () => {
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
      },
      {
        isUserTeam: true,
        genericInfos: {
          id: 1,
          name: "charmander",
          sprit: "charmanderSpriteTest"
        },
        pokemonStats: [
          {
            base_stat: 150,
            name: "attack"
          }
        ]
      }
    ]
    render(<PokemonStats pokemonStats={pokemon} />)

    const pokemonNameOne = screen.getByText("bulbasaur")
    const pokemonNameStatsOne = screen.getByText("hp:")
    const pokemonBaseStatsOne = screen.getByText("100")
    const pokemonAverageStatsOne = screen.getByText("total: 100")

    const pokemonNameTwo = screen.getByText("charmander")
    const pokemonNameStatsTwo = screen.getByText("attack:")
    const pokemonBaseStatsTwo = screen.getByText("150")
    const pokemonAverageStatsTwo = screen.getByText("total: 150")

    expect(pokemonNameOne).toBeInTheDocument()
    expect(pokemonNameStatsOne).toBeInTheDocument()
    expect(pokemonBaseStatsOne).toBeInTheDocument()
    expect(pokemonAverageStatsOne).toBeInTheDocument()

    expect(pokemonNameTwo).toBeInTheDocument()
    expect(pokemonNameStatsTwo).toBeInTheDocument()
    expect(pokemonBaseStatsTwo).toBeInTheDocument()
    expect(pokemonAverageStatsTwo).toBeInTheDocument()
  })

  it("Should be in the document more than one empty pokemon stats section", () => {
    const pokemon: IPokemon[] = [
      {
        isUserTeam: false
      },
      {
        isUserTeam: false
      }
    ]
    render(<PokemonStats pokemonStats={pokemon} />)

    const emptyCard = screen.getAllByText("Empty")

    expect(emptyCard[0]).toBeInTheDocument()
    expect(emptyCard[1]).toBeInTheDocument()
  })
})
