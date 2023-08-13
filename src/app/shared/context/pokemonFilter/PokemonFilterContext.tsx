import { createContext } from "react"
import type { IPokemonSearch } from "../../types"

interface IProp {
  searchFilterFunction: (data: string) => void
  findPokemon: IPokemonSearch | boolean
  isLoadingSearchPokemon: boolean
}

export const PokemonFilterContext = createContext<IProp>({
  searchFilterFunction(data) {
    data = ""
  },
  findPokemon: false,
  isLoadingSearchPokemon: true
})
