import { render, screen } from "@testing-library/react"
import { PokeAttacks } from ".."
import type { IPokemon } from "../../../../shared/types"

describe("<PokeAttack />", () => {
  it("Should be in the document the attack components", () => {
    const pokemon: IPokemon = {
      pokemonMovie: [
        {
          movie: "Ember",
          level: 1,
          type: "By level"
        }
      ]
    }

    render(<PokeAttacks pokemonMovie={pokemon.pokemonMovie} />)

    const tableTitle = screen.getByText("Attack by Level")
    const tableMovieTitle = screen.getByText("Level")
    const tableLevelTitle = screen.getByText("Attack")
    const tableTypeTitle = screen.getByText("Type")
    const movie = screen.getByText("Ember")
    const level = screen.getByText("1")
    const type = screen.getByText("By level")

    expect(tableTitle).toBeInTheDocument()
    expect(tableMovieTitle).toBeInTheDocument()
    expect(tableLevelTitle).toBeInTheDocument()
    expect(tableTypeTitle).toBeInTheDocument()
    expect(movie).toBeInTheDocument()
    expect(level).toBeInTheDocument()
    expect(type).toBeInTheDocument()
  })
})
