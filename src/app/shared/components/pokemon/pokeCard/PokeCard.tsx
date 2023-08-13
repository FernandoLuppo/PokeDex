import { useCallback } from "react"
import * as S from "./pokeCard.styles"
import { useNavigate } from "react-router-dom"

interface IPokemon {
  type: [{ type: string }]
  name: string
  id: number
  sprit: string
}

interface IProps {
  data: IPokemon | IPokemonSearch
}

interface IPokemonSearch {
  genericInfos: {
    name: string
    id: number
    sprit: string
  }
  types: [{ type: string }]
}

export const PokeCard: React.FC<IProps> = ({ data }) => {
  const id = "genericInfos" in data ? data.genericInfos.id : data.id
  const name = "genericInfos" in data ? data.genericInfos.name : data.name
  const sprite = "genericInfos" in data ? data.genericInfos.sprit : data.sprit
  const types = "types" in data ? data.types : data.type

  const navigate = useNavigate()
  const handleClick = useCallback(() => {
    navigate(`/pokemon/${id}`)
  }, [])

  return (
    <S.ContainerPokeCard key={id} onClick={handleClick}>
      <S.PokeId>#{id}</S.PokeId>
      <div>
        <S.PokemonSprit src={sprite} alt="" />
      </div>
      <S.PokeInfos>
        <p>{name}</p>
        <div>
          {types.map(pokemon => (
            <S.PokeType key={pokemon.type} type={pokemon.type}>
              {pokemon.type}
            </S.PokeType>
          ))}
        </div>
      </S.PokeInfos>
    </S.ContainerPokeCard>
  )
}
