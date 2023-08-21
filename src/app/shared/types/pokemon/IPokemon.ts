export interface IPokeList {
  start: number
  end: number
}

export interface IPokemon {
  description?: string
  isUserTeam?: boolean
  genericInfos?: {
    id: number
    name: string
    height?: number
    weight?: number
    sprit: string
  }
  pokemonMovie?: [
    {
      movie: string
      level: number
      type: string
    }
  ]
  pokemonStats?: [
    {
      base_stat: number
      name: string
    }
  ]

  types?: [{ type: string }]
}
