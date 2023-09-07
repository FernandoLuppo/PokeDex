import type { IPokemon } from "../../types"
import { createContext } from "react"

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
