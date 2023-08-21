import { createContext } from "react"
import type { IPokemon } from "../../types"

interface IProp {
  searchFilterFunction: (data: string) => void
  findPokemon: IPokemon | boolean
  isLoadingSearchPokemon: boolean
}

export const PokemonFilterContext = createContext<IProp>({
  searchFilterFunction(data) {
    data = ""
  },
  findPokemon: false,
  isLoadingSearchPokemon: true
})
