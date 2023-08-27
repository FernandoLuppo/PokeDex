export interface IProps {
  pokemonStats: Array<{ base_stat: number; name: string }> | undefined
}

export const pokemonStatsAverage = ({ pokemonStats }: IProps): number => {
  if (pokemonStats === undefined) {
    return 0
  }

  let sum = 0

  pokemonStats.forEach(pokemon => {
    sum += pokemon.base_stat
  })

  return sum / pokemonStats.length
}
