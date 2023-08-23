import * as S from "./pokemon.styles"
import { useEffect, useState } from "react"
import { HeaderDefault } from "../../shared/components"
import { PokeAttacks, PokeInfos } from "./components"
import type { IPokemon } from "../../shared/types"
import { useParams } from "react-router-dom"
import { post } from "../../shared/service"

export const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon>()

  const { id } = useParams()

  useEffect(() => {
    post("/pokemon/get-one", { id })
      .then(res => {
        if (res.data !== undefined) {
          setPokemon(res.data.data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [id])

  return (
    <div>
      <HeaderDefault />
      <S.ContainerPokemon>
        {pokemon !== undefined ? (
          <>
            <PokeInfos
              description={pokemon.description}
              types={pokemon.types}
              pokemonMovie={pokemon.pokemonMovie}
              pokemonStats={pokemon.pokemonStats}
              genericInfos={pokemon.genericInfos}
              key={pokemon.genericInfos?.id}
            />
            <PokeAttacks pokemonMovie={pokemon.pokemonMovie} />
          </>
        ) : (
          ""
        )}
      </S.ContainerPokemon>
    </div>
  )
}
