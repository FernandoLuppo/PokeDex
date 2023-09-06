import { render, screen } from "@testing-library/react"
import { PokeDescription } from ".."
import type { IPokemon } from "../../../../../../shared/types"

describe("<PokeDescription />", () => {
  it("Should be in the document the description components", () => {
    const { description }: IPokemon = {
      description: "A generic description"
    }
    const { genericInfos }: IPokemon = {
      genericInfos: {
        id: 1,
        name: "Charmander",
        sprit: "test.com",
        height: 10,
        weight: 10
      }
    }

    render(
      <PokeDescription description={description} genericInfos={genericInfos} />
    )

    setTimeout(() => {
      const pokeId = screen.getByText("#1 Charmander")
      const pokeHeight = screen.getByText("Height: 10")
      const pokeWeight = screen.getByText("Weight: 10")
      const pokeDescription = screen.getByText("About: A generic description")

      expect(pokeId).toBeInTheDocument()
      expect(pokeHeight).toBeInTheDocument()
      expect(pokeWeight).toBeInTheDocument()
      expect(pokeDescription).toBeInTheDocument()
    }, 3000)
  })
})
