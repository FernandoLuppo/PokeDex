import { PokemonList } from ".."
import { PokemonFilterContext } from "../../../../shared/context"
import type { IPokemon } from "../../../../shared/types"
import { render, screen } from "@testing-library/react"

describe("PokemonList.tsx", () => {
  describe("Should be in the document", () => {
    it("Should be in the document the initial loading", () => {
      render(<PokemonList />)

      const loadingList = screen.getByAltText("Loading Gif")

      expect(loadingList).toBeInTheDocument()
    })

    it("Should be in the list the pokemon cards", () => {
      render(<PokemonList />)

      setInterval(() => {
        const card = screen.getByTestId("pokemon-card")
        expect(card).toBeInTheDocument()
      }, 3000)
    })

    it("Should show a loading when user search a pokemon", () => {
      render(
        <PokemonFilterContext.Provider
          value={{
            findPokemon: false,
            isLoadingSearchPokemon: true,
            searchFilterFunction() {}
          }}
        >
          <PokemonList />
        </PokemonFilterContext.Provider>
      )

      const loadingSearch = screen.getByAltText("Loading Gif")

      expect(loadingSearch).toBeInTheDocument()
    })

    it("Should loading a card when user search a pokemon", () => {
      const pokemon: IPokemon = {
        genericInfos: {
          id: 1,
          name: "bulbasaur",
          sprit: "bulbasaurSpriteTest"
        },
        types: [{ type: "grass" }]
      }

      render(
        <PokemonFilterContext.Provider
          value={{
            findPokemon: pokemon,
            isLoadingSearchPokemon: false,
            searchFilterFunction() {}
          }}
        >
          <PokemonList />
        </PokemonFilterContext.Provider>
      )

      setTimeout(() => {
        const cardId = screen.getByText("#1")
        const cardName = screen.getByText("bulbasaur")
        const cardType = screen.getByText("grass")

        expect(cardName).toBeInTheDocument()
        expect(cardId).toBeInTheDocument()
        expect(cardType).toBeInTheDocument()
      }, 3000)
    })

    describe("Functions should work correctly", () => {
      it("Should call more pokemon when user scroll to end of the window", () => {
        const { container } = render(<PokemonList />)

        window.scrollTo(0, container.scrollHeight)

        setTimeout(() => {
          const pokemon = screen.getByText("#23")
          expect(pokemon).toBeInTheDocument()
        }, 3000)
      })
    })
  })
})
