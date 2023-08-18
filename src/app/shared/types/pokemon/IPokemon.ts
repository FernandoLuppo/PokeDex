export interface IPokemon {
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
