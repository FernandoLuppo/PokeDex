import * as S from "./pokemonList.styles"
import {
  LoadingPokemonHome,
  LoadingPokemonList,
  PokeCard
} from "../../../../shared/components"

import { useContext, useEffect, useState } from "react"
import { post } from "../../../../shared/service"
import { PokemonFilterContext } from "../../../../shared/context"
import { ErrorMessage } from "./components/ErrorMessage"
import type { IPokeList, IPokemon } from "../../../../shared/types"
import { calcWindowHeight } from "../../../../shared/utils"

export const PokemonList: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([])
  const [isLoadingList, setIsLoadingList] = useState<boolean>(true)
  const [pokemonList, setPokemonList] = useState<IPokeList>({
    start: 0,
    end: 20
  })
  const [firstLoad, setFirstLoad] = useState<boolean>(true)
  const [searchPokemon, setSearchPokemon] = useState<IPokemon | boolean>(false)

  useEffect(() => {
    setIsLoadingList(true)
    post("/pokemon/get-all", pokemonList)
      .then(res => {
        setPokemon([...pokemon, ...res.data.data])
        setIsLoadingList(false)
        setFirstLoad(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [pokemonList])

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isLoadingList])

  const handleScroll = (): void => {
    if (firstLoad) {
      return
    }

    const { scrollY, documentHeight, windowHeight } = calcWindowHeight()

    if (scrollY + windowHeight >= documentHeight) {
      setPokemonList({ start: pokemonList.start + 20, end: pokemonList.end })
    }
  }

  const { findPokemon, isLoadingSearchPokemon } =
    useContext(PokemonFilterContext)

  useEffect(() => {
    if (findPokemon === undefined || findPokemon === false) {
      setSearchPokemon(false)
      return
    }

    if (findPokemon === true) {
      setSearchPokemon(true)
      return
    }

    setSearchPokemon(findPokemon)
  }, [findPokemon])

  return (
    <S.ContainerPokemon>
      <S.List>
        {pokemon.length === 0 ? (
          <LoadingPokemonHome />
        ) : isLoadingSearchPokemon ? (
          <LoadingPokemonHome />
        ) : searchPokemon === false ? (
          pokemon.map(data => {
            return <PokeCard key={data.genericInfos.id} data={data} />
          })
        ) : searchPokemon === true ? (
          <ErrorMessage />
        ) : (
          <PokeCard key={searchPokemon.genericInfos?.id} data={searchPokemon} />
        )}
      </S.List>

      {isLoadingList && pokemon.length > 0 && (
        <S.Loading>
          <LoadingPokemonList />
        </S.Loading>
      )}
    </S.ContainerPokemon>
  )
}
