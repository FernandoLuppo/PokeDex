import { useEffect, useState } from "react"
import { HeaderDefault } from "../../shared/components"
import { PokeEvolutions, PokeInfos } from "./components"
import type { IPokemon } from "../../shared/types"
import { useParams } from "react-router-dom"
import { post } from "../../shared/service"

export const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon>()

  const { id } = useParams()

  useEffect(() => {
    post("/pokemon/get-one", { id })
      .then(({ data }) => {
        const newData = data.data
        const info = { pokemon: newData }
        setPokemon(info)
      })
      .catch(error => {
        console.log(error)
      })
  }, [id])

  return (
    <div>
      <HeaderDefault />
      <div>
        {pokemon !== undefined ? <PokeInfos pokemon={pokemon.pokemon} /> : ""}
        <PokeEvolutions />
      </div>
    </div>
  )
}
