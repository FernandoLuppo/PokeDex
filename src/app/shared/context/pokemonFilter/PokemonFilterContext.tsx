import { createContext } from "react"

interface IProp {
  searchFilterFunction: (data: string) => void
  findPokemon: any
  isLoadingSearchPokemon: boolean
}

export const PokemonFilterContext = createContext<IProp>({
  searchFilterFunction(data) {
    data = ""
  },
  findPokemon: "",
  isLoadingSearchPokemon: true
})
