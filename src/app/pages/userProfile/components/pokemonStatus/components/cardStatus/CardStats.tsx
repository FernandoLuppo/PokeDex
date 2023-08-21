import * as S from "./cardStats.styles"
import type { IPokemon } from "../../../../../../shared/types"
import { Status } from "./components"
import { pokemonStatsAverage } from "../../../../../../shared/utils"

interface IProps {
  pokemonStats: IPokemon[]
}

export const CardStats: React.FC<IProps> = ({ pokemonStats }) => {
  return (
    <>
      {pokemonStats.map(pokemon => {
        return (
          <>
            {pokemon.isUserTeam === true ? (
              <S.ContainerCardStats key={pokemon.genericInfos.id}>
                <h3>{pokemon.genericInfos.name}</h3>
                <ul>
                  <Status pokemonStats={pokemon.pokemonStats} />
                </ul>
                <p>
                  total:{" "}
                  {Math.round(
                    pokemonStatsAverage({ pokemonStats: pokemon.pokemonStats })
                  )}
                </p>
              </S.ContainerCardStats>
            ) : (
              <S.ContainerCardStats key={pokemon.genericInfos.id}>
                <h3>Empty</h3>
              </S.ContainerCardStats>
            )}
          </>
        )
      })}
    </>
  )
}
