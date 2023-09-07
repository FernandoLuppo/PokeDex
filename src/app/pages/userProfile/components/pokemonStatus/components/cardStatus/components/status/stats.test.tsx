import { Stats } from ".."
import type { IPokemon } from "../../../../../../../../shared/types"
import { render, screen } from "@testing-library/react"

describe("<Stats />", () => {
  it("Elements should be in the document", () => {
    const { pokemonStats }: IPokemon = {
      pokemonStats: [
        {
          base_stat: 100,
          name: "hp"
        }
      ]
    }
    render(<Stats pokemonStats={pokemonStats} />)

    const baseStats = screen.getByText("100")
    const statsName = screen.getByText("hp:")

    expect(baseStats).toBeInTheDocument()
    expect(statsName).toBeInTheDocument()
  })
})
