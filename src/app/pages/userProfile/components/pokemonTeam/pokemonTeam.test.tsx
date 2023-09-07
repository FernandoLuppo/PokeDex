import { render, screen } from "@testing-library/react"
import { PokemonTeam } from ".."
import type { IPokemon } from "../../../../shared/types"

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("<PokemonTeam />", () => {
  it("User should have a pokemon team whit one pokemon card and five other empty card", () => {
    const pokemonTeam: IPokemon[] = [
      {
        genericInfos: {
          id: 1,
          name: "bulbasaur",
          sprit: "bulbasaurSpriteTest"
        },
        types: [{ type: "grass" }]
      },
      {
        genericInfos: {
          id: 0,
          name: "",
          sprit: ""
        }
      },
      {
        genericInfos: {
          id: 0,
          name: "",
          sprit: ""
        }
      },
      {
        genericInfos: {
          id: 0,
          name: "",
          sprit: ""
        }
      },
      {
        genericInfos: {
          id: 0,
          name: "",
          sprit: ""
        }
      },
      {
        genericInfos: {
          id: 0,
          name: "",
          sprit: ""
        }
      }
    ]

    render(<PokemonTeam team={pokemonTeam} teamIsLoaded={true} />)

    const pokeCard = screen.getByText("bulbasaur")
    const emptyCard = screen.getAllByTestId("pokemon-empty-card")

    console.log(emptyCard)

    expect(pokeCard).toBeInTheDocument()
    expect(emptyCard[0]).toBeInTheDocument()
    expect(emptyCard[1]).toBeInTheDocument()
    expect(emptyCard[2]).toBeInTheDocument()
    expect(emptyCard[3]).toBeInTheDocument()
    expect(emptyCard[4]).toBeInTheDocument()
  })
})
