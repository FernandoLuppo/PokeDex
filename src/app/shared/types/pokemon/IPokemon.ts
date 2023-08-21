export interface IPokemonCard {
  type: [{ type: string }]
  name: string
  id: number
  sprit: string
}

export interface IPokeList {
  start: number
  end: number
}

export interface IPokemonSearch {
  genericInfos: {
    name: string
    id: number
    sprit: string
  }
  types: [{ type: string }]
}

export interface IPokemon {
  pokemon: {
    description?: string
    isUserTeam?: boolean
    genericInfos: {
      id: number
      name: string
      height?: number
      weight?: number
      sprit: string
    }
    levels?: {
      firstForm: {
        name: string
      }
      secondForm: {
        evolveBy: string
        level: number
        name: string
      }
      thirdForm: {
        evolveBy: string
        level: number
        name: string
      }
    }
    pokemonMovie?: [
      {
        movie: string
        level: number
      }
    ]
    pokemonStats?: [
      {
        base_stat: number
        name: string
      }
    ]
    types: [
      {
        type: string
      }
    ]
  }
}

export interface IPokemonEvolutions {
  levels: {
    firstForm: {
      name: string
    }
    secondForm?: {
      name: string
      level: number
      evolveBy: string
    }
    thirdForm?: {
      name: string
      level: number
      evolveBy: string
    }
  }
}
