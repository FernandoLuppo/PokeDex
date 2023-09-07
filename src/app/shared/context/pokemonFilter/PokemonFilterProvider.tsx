import { PokemonFilterContext } from "./PokemonFilterContext"
import { post } from "../../service"
import type { IPokemon } from "../../types"
import { useEffect, useState } from "react"

export const PokemonFilterProvider = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  const [searchFilter, setSearchFilter] = useState<string>("")
  const [findPokemon, setFindPokemon] = useState<IPokemon | boolean>(false)
  const [isLoadingSearchPokemon, setIsLoadingSearchPokemon] =
    useState<boolean>(true)

  const searchFilterFunction = (data: string): void => {
    setSearchFilter(data)
  }

  useEffect(() => {
    setIsLoadingSearchPokemon(true)
    if (searchFilter === undefined || searchFilter === null) {
      setIsLoadingSearchPokemon(false)
      return
    }

    if (searchFilter === "") {
      setFindPokemon(false)
      setIsLoadingSearchPokemon(false)
      return
    }

    post("/pokemon/get-one", { id: searchFilter.toString().toLowerCase() })
      .then(pokemon => {
        if (pokemon.response !== undefined) {
          setFindPokemon(true)
          setIsLoadingSearchPokemon(false)
          return
        }

        setFindPokemon(pokemon.data.data)
        setIsLoadingSearchPokemon(false)
      })
      .catch(error => {
        setFindPokemon(false)
        setIsLoadingSearchPokemon(false)
        console.log(error)
      })
  }, [searchFilter])

  return (
    <PokemonFilterContext.Provider
      value={{ searchFilterFunction, findPokemon, isLoadingSearchPokemon }}
    >
      {children}
    </PokemonFilterContext.Provider>
  )
}
