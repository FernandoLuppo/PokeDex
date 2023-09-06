import { fireEvent, render, screen } from "@testing-library/react"
import { PokeSprit } from ".."
import type { IPokemon } from "../../../../../../shared/types"

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("<PokeSprit />", () => {
  describe("Elements should be in the document", () => {
    it("Pokemon sprit and button add needs to be in the document", () => {
      const pokemon: IPokemon = {
        genericInfos: {
          id: 1,
          name: "bulbasaur",
          sprit: "bulbasaurSpriteTest"
        },
        types: [{ type: "grass" }]
      }

      render(
        <PokeSprit genericInfos={pokemon.genericInfos} types={pokemon.types} />
      )

      setTimeout(() => {
        const pokemon = screen.getByText("bulbasaur")
        const addButton = screen.getByText("Add to team")

        expect(pokemon).toBeInTheDocument()
        expect(addButton).toBeInTheDocument()
      }, 3000)
    })
  })

  describe("Functions should be work correctly", () => {
    it("When button Add to team was clicked should send user to home", () => {
      const pokemon: IPokemon = {
        genericInfos: {
          id: 1,
          name: "bulbasaur",
          sprit: "bulbasaurSpriteTest"
        },
        types: [{ type: "grass" }]
      }

      render(
        <PokeSprit genericInfos={pokemon.genericInfos} types={pokemon.types} />
      )

      setTimeout(() => {
        const addButton = screen.getByText("Add to team")
        fireEvent.click(addButton)

        expect(mockNavigate).toBeCalledWith("/")
      }, 3000)
    })
  })
})
