import * as S from "./pokeStats.styles"
import type { IPokemon } from "../../../../../../shared/types"
import { pokemonStatsAverage } from "../../../../../../shared/utils"

export const PokeStats: React.FC<IPokemon> = ({ types, pokemonStats }) => {
  return (
    <S.ContainerPokeStats>
      <h1>Base Stats</h1>
      <S.ContainerPokeStatsContent>
        <S.ContainerPokeType>
          {types?.map(type => {
            return (
              <S.PokeType key={type.type} type={type.type}>
                {type.type}
              </S.PokeType>
            )
          })}
        </S.ContainerPokeType>

        <S.Line></S.Line>

        <div>
          {pokemonStats?.map(item => {
            return (
              <S.ContainerStats key={item.name}>
                <p>
                  {item.name === "special-attack"
                    ? "Sp.Attack"
                    : item.name === "special-defense"
                    ? "Sp.Defense"
                    : item.name}
                  :
                </p>
                <p>{item.base_stat}</p>
                <S.PokeStatsBar stats={item.name}>
                  <S.PokeBaseStats
                    basestatus={item.base_stat}
                    stats={item.name}
                  ></S.PokeBaseStats>
                </S.PokeStatsBar>
              </S.ContainerStats>
            )
          })}
          <h2>Total: {Math.round(pokemonStatsAverage({ pokemonStats }))}</h2>
        </div>
      </S.ContainerPokeStatsContent>
    </S.ContainerPokeStats>
  )
}
