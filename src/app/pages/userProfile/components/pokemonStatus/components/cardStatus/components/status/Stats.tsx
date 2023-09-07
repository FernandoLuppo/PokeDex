import * as S from "./stats.styles"

interface IProps {
  pokemonStats:
    | [
        {
          name: string
          base_stat: number
        }
      ]
    | undefined
}

export const Stats: React.FC<IProps> = ({ pokemonStats }) => {
  return (
    <>
      {pokemonStats?.map(status => {
        return (
          <S.ContainerStatus key={status.name}>
            <p>
              {status.name === "special-attack"
                ? "Sp.Attack"
                : status.name === "special-defense"
                ? "Sp.Defense"
                : status.name}
              :
            </p>
            <p>{status.base_stat}</p>
            <S.StatsBar stats={status.name}>
              <S.BaseStats
                basestatus={status.base_stat}
                stats={status.name}
              ></S.BaseStats>
            </S.StatsBar>
          </S.ContainerStatus>
        )
      })}
    </>
  )
}
