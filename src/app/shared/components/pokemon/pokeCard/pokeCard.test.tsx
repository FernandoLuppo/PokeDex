import { PokeCard } from ".."
import type { IPokemon } from "../../../types"
import { fireEvent, render, screen } from "@testing-library/react"

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

jest.mock("axios", () => ({
  delete: jest.fn(async () => {
    await Promise.resolve()
  })
}))

describe("PokeCard.tsx", () => {
  describe("Should be in the document and render normally", () => {
    it("Should be in the document and needs to render a pokemon", () => {
      const pokemon: IPokemon = {
        genericInfos: {
          id: 1,
          name: "bulbasaur",
          sprit: "bulbasaurSpriteTest"
        },
        types: [{ type: "grass" }]
      }
      render(<PokeCard data={pokemon} />)

      const cardId = screen.getByText("#1")
      const cardName = screen.getByText("bulbasaur")
      const cardType = screen.getByText("grass")

      expect(cardName).toBeInTheDocument()
      expect(cardId).toBeInTheDocument()
      expect(cardType).toBeInTheDocument()
    })

    it("Should be in the document but like a empty card", () => {
      const pokemon: IPokemon = {
        isUserTeam: false,
        genericInfos: {
          id: 0,
          name: "",
          sprit: ""
        },
        types: [{ type: "" }]
      }
      render(<PokeCard data={pokemon} />)

      const card = screen.getByTestId("pokemon-empty-card")
      const cardId = screen.queryByText("#1")
      const cardName = screen.queryByText("bulbasaur")
      const cardType = screen.queryByText("grass")

      expect(card).toBeInTheDocument()
      expect(cardName).not.toBeInTheDocument()
      expect(cardId).not.toBeInTheDocument()
      expect(cardType).not.toBeInTheDocument()
    })

    it("Should be in the document but the user's team version with the delete pokemon button", () => {
      const pokemon: IPokemon = {
        isUserTeam: true,
        genericInfos: {
          id: 1,
          name: "bulbasaur",
          sprit: "bulbasaurSpriteTest"
        },
        types: [{ type: "grass" }]
      }
      render(<PokeCard data={pokemon} />)

      const cardRemoveButton = screen.getByText("X")

      expect(cardRemoveButton).toBeInTheDocument()
    })
  })

  describe("Functions should work correctly", () => {
    it("Should call the pokemon route when his card was clicked", () => {
      const pokemon: IPokemon = {
        genericInfos: {
          id: 1,
          name: "bulbasaur",
          sprit: "bulbasaurSpriteTest"
        },
        types: [{ type: "grass" }]
      }
      render(<PokeCard data={pokemon} />)

      const card = screen.getByTestId("pokemon-card")
      fireEvent.click(card)

      expect(mockNavigate).toBeCalledWith("/pokemon/1")
    })

    it("When user clicked in a empty card should redirect to home", () => {
      const pokemon: IPokemon = {
        isUserTeam: false,
        genericInfos: {
          id: 0,
          name: "",
          sprit: ""
        },
        types: [{ type: "" }]
      }
      render(<PokeCard data={pokemon} />)

      const card = screen.getByTestId("pokemon-empty-card")
      fireEvent.click(card)

      expect(mockNavigate).toBeCalledWith("/")
    })

    it("Should re-loaded the page when the remove pokemon button was clicked", () => {
      const pokemon: IPokemon = {
        isUserTeam: true,
        genericInfos: {
          id: 1,
          name: "bulbasaur",
          sprit: "bulbasaurSpriteTest"
        },
        types: [{ type: "grass" }]
      }
      render(<PokeCard data={pokemon} />)

      const cardRemoveButton = screen.getByText("X")
      fireEvent.click(cardRemoveButton)

      setInterval(() => {
        const card = screen.getByTestId("pokemon-empty-card")

        expect(cardRemoveButton).not.toBeInTheDocument()
        expect(card).toBeInTheDocument()
      }, 3000)
    })
  })
})
