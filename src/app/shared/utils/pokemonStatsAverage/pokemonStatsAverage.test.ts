import { pokemonStatsAverage } from ".."
import type { IProps } from ".."

describe("pokemonStatsAverage.ts", () => {
  it("Should return the average of pokemon stats", () => {
    const data: IProps = {
      pokemonStats: [
        {
          base_stat: 10,
          name: "hp"
        },
        {
          base_stat: 10,
          name: "attack"
        },
        {
          base_stat: 10,
          name: "defense"
        }
      ]
    }

    const result = pokemonStatsAverage(data)

    if (data.pokemonStats !== undefined) {
      let sum = 0

      data.pokemonStats.forEach(pokemon => {
        sum += pokemon.base_stat
      })
      const average = sum / data.pokemonStats.length

      expect(result).toBe(average)
    }
  })

  it("Should return 0 as error", () => {
    const data: IProps = {
      pokemonStats: undefined
    }

    const result = pokemonStatsAverage(data)

    expect(result).toBe(0)
  })
})
