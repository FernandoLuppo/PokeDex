import * as S from "./home.styles"
import {
  Header,
  LoadingPokemonHome,
  LoadingPokemonList,
  PokeCard
} from "../../shared/components"
import { SideBar } from "./components/sideBar/SideBar"
import { useEffect, useState } from "react"
import { post } from "../../shared/service"

interface IPokemon {
  type: [{ type: string }]
  name: string
  id: number
  sprit: string
}

export const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [pokemonList, setPokemonList] = useState<{
    start: number
    end: number
  }>({ start: 0, end: 20 })

  useEffect(() => {
    setIsLoading(true)
    post("/pokemon/get-all", pokemonList)
      .then(res => {
        setPokemon([...pokemon, ...res.data.data])
        setIsLoading(false)
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
  }, [isLoading])

  const handleScroll = (): void => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return
    }
    setPokemonList({ start: pokemonList.start + 20, end: pokemonList.end })
  }

  return (
    <S.HomeContainer>
      {window.innerWidth > 900 && <SideBar />}

      <S.HomeColumn>
        <Header />
        <S.ContainerPokemon>
          <S.List>
            {pokemon.length === 0 ? (
              <LoadingPokemonHome />
            ) : (
              pokemon.map(data => {
                return <PokeCard key={data.id} data={data} />
              })
            )}
          </S.List>

          {isLoading && pokemon.length > 0 && (
            <S.Loading>
              <LoadingPokemonList />
            </S.Loading>
          )}
        </S.ContainerPokemon>
      </S.HomeColumn>
    </S.HomeContainer>
  )
}
