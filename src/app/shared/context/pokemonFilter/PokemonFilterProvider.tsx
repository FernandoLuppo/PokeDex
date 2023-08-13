import { useEffect, useState } from "react"
import { PokemonFilterContext } from "./PokemonFilterContext"
import { post } from "../../service"

export const PokemonFilterProvider = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  const [searchFilter, setSearchFilter] = useState<string>("")
  const [findPokemon, setFindPokemon] = useState<any>("")
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

    post("/pokemon/get-one", { id: searchFilter })
      .then(pokemon => {
        if (pokemon.response !== undefined) {
          setFindPokemon(true)
          setIsLoadingSearchPokemon(false)
          return
        }

        setFindPokemon(pokemon)
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
