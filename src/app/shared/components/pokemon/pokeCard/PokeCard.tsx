import { useCallback } from "react"
import * as S from "./pokeCard.styles"
import { useNavigate } from "react-router-dom"
import type { IPokemon } from "../../../types"
import { AiOutlinePlus } from "react-icons/ai"
import { exclude } from "../../../service"

interface IProps {
  data: IPokemon
}

export const PokeCard: React.FC<IProps> = ({ data }) => {
  const isUserTeam = "isUserTeam" in data && true
  const id = data.genericInfos?.id
  const name = data.genericInfos?.name
  const sprite = data.genericInfos?.sprit
  const types = data.types

  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    if (id !== undefined) {
      navigate(`/pokemon/${id}`)
    }
  }, [])

  const handleAddPokemon = useCallback(() => {
    navigate("/")
  }, [])

  const handleRemovePokemon = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      e.stopPropagation()

      if (id !== undefined) {
        exclude(`/pokemon/remove/${id}`)
          .then(() => {
            window.location.assign(window.location.href)
          })
          .catch(error => {
            console.log(error)
          })
      }
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
              {types?.map(pokemon => (
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
