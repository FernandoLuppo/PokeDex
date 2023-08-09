import * as S from "./home.styles"
import { Header, PokeCard } from "../../shared/components"
import { SideBar } from "./components/sideBar/SideBar"
import { useEffect, useState } from "react"
import { post } from "../../shared/service"

interface IProps {
  data: [
    {
      type: [
        {
          type: string
        }
      ]
      name: string
      id: number
      sprit: string
    }
  ]
}

export const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<IProps | any>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    const pokemonList = {
      start: 0,
      end: 20
    }
    post("/pokemon/get-all", pokemonList)
      .then(pokemon => {
        setPokemon(pokemon.data)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
      })

    const handleScroll = (): void => {
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY
      const bodyHeight = document.body.scrollHeight

      if (scrollY + windowHeight >= bodyHeight) {
        setIsLoading(true)

        pokemonList.start = pokemonList.end
        pokemonList.end = pokemonList.end + 20

        post("/pokemon/get-all", pokemonList)
          .then(pokemon => {
            const newPokemonData = pokemon.data

            setPokemon([...pokemon, newPokemonData])
            setIsLoading(false)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pokemon])

  return (
    <S.HomeContainer>
      {window.innerWidth > 900 && <SideBar />}

      <S.HomeColumn>
        <Header />
        <S.ContainerPokemon>
          {pokemon?.data === undefined ? "" : <PokeCard data={pokemon?.data} />}
        </S.ContainerPokemon>
      </S.HomeColumn>
    </S.HomeContainer>
  )
}
