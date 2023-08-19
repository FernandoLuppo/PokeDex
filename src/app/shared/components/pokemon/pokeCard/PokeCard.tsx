import { useCallback } from "react"
import * as S from "./pokeCard.styles"
import { useNavigate } from "react-router-dom"
import type { IPokemonCard, IPokemonSearch } from "../../../types"
import { AiOutlinePlus } from "react-icons/ai"
import { exclude } from "../../../service"

interface IProps {
  data: IPokemonCard | IPokemonSearch
}

export const PokeCard: React.FC<IProps> = ({ data }) => {
  const isUserTeam = "isUserTeam" in data && true
  const id = "genericInfos" in data ? data.genericInfos.id : data.id
  const name = "genericInfos" in data ? data.genericInfos.name : data.name
  const sprite = "genericInfos" in data ? data.genericInfos.sprit : data.sprit
  const types = "types" in data ? data.types : data.type

  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate(`/pokemon/${id}`)
  }, [])

  const handleAddPokemon = useCallback(() => {
    navigate("/")
  }, [])

  const handleRemovePokemon = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      e.stopPropagation()
      console.log(id)

      exclude(`/pokemon/remove/${id}`)
        .then(item => {
          window.location.assign(window.location.href)
        })
        .catch(error => {
          console.log(error)
        })
    },
    [id]
  )

  return (
    <>
      {id === 0 ? (
        <S.ContainerPokeCard onClick={handleAddPokemon}>
          <S.AddPokemon>
            <AiOutlinePlus size={120} />
          </S.AddPokemon>
        </S.ContainerPokeCard>
      ) : (
        <S.ContainerPokeCard key={id} onClick={handleClick}>
          <S.ContainerCardSuperiorInfos>
            <S.PokeId>#{id}</S.PokeId>
            {isUserTeam && (
              <S.RemovePokemon onClick={handleRemovePokemon}>X</S.RemovePokemon>
            )}
          </S.ContainerCardSuperiorInfos>
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
      )}
    </>
  )
}
