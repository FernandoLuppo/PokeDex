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

interface IPokemon {
  type: [{ type: string }]
  name: string
  id: number
  sprit: string
}

interface IPokeList {
  start: number
  end: number
}

interface IPokemonSearch {
  genericInfos: {
    name: string
    id: number
    sprit: string
  }
  types: [{ type: string }]
}

export const PokemonList: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([])
  const [isLoadingList, setIsLoadingList] = useState<boolean>(true)
  const [pokemonList, setPokemonList] = useState<IPokeList>({
    start: 0,
    end: 20
  })
  const [firstLoad, setFirstLoad] = useState<boolean>(true)
  const [searchPokemon, setSearchPokemon] = useState<IPokemonSearch | boolean>(
    false
  )

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

    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )

    if (scrollY + windowHeight >= documentHeight) {
      setPokemonList({ start: pokemonList.start + 20, end: pokemonList.end })
    }
  }

  const { findPokemon, isLoadingSearchPokemon } =
    useContext(PokemonFilterContext)

  useEffect(() => {
    if (
      findPokemon === undefined ||
      findPokemon === "" ||
      findPokemon === false
    ) {
      setSearchPokemon(false)
      return
    }

    if (findPokemon === true) {
      setSearchPokemon(true)
      return
    }

    setSearchPokemon(findPokemon.data.data)
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
            return <PokeCard key={data.id} data={data} />
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
