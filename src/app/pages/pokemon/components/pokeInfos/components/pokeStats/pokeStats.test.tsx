import { PokeStats } from ".."
import type { IPokemon } from "../../../../../../shared/types"
import { render, screen } from "@testing-library/react"

describe("<PokeStats />", () => {
  const { pokemonStats }: IPokemon = {
    pokemonStats: [
      {
        base_stat: 100,
        name: "hp"
      }
    ]
  }
  it("Page elements should be in the document", () => {
    render(<PokeStats pokemonStats={pokemonStats} />)

    const pageTitle = screen.getByText("Base Stats")
    expect(pageTitle).toBeInTheDocument()
  })

  it("Pokemon Stats should be in the document", () => {
    render(<PokeStats pokemonStats={pokemonStats} />)

    const stats = screen.getByText("hp:")
    const total = screen.getByText("Total: 100")

    expect(stats).toBeInTheDocument()
    expect(total).toBeInTheDocument()
  })
})
