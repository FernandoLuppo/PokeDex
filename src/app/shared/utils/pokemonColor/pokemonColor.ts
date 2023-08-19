export const pokemonColor = (color: string): string => {
  switch (color) {
    case "normal":
      return "#A8A77A"
    case "fire":
      return "#EE8130"
    case "water":
      return "#6390F0"
    case "electric":
      return "#F7D02C"
    case "grass":
      return "#7AC74C"
    case "ice":
      return "#96D9D6"
    case "fighting":
      return "#C22E28"
    case "poison":
      return "#A33EA1"
    case "ground":
      return "#E2BF65"
    case "flying":
      return "#A98FF3"
    case "psychic":
      return "#F95587"
    case "bug":
      return "#A6B91A"
    case "rock":
      return "#B6A136"
    case "ghost":
      return "#735797"
    case "dragon":
      return "#6F35FC"
    case "dark":
      return "#705746"
    case "steel":
      return "#B7B7CE"
    case "fairy":
      return "#D685AD"
    default:
      return ""
  }
}

export const pokemonStatsColor = (color: string): string => {
  switch (color) {
    case "hp":
      return "#D96C6C"
    case "attack":
      return "#D99A6C"
    case "defense":
      return "#D9C76C"
    case "special-attack":
      return "#6C98D9"
    case "special-defense":
      return "#6FD96C"
    case "speed":
      return "#8F6CD9"
    default:
      return ""
  }
}

export const pokemonBaseStatsColor = (color: string): string => {
  switch (color) {
    case "hp":
      return "#CC1F1F"
    case "attack":
      return "#CC671F"
    case "defense":
      return "#B29812"
    case "special-attack":
      return "#1F64CC"
    case "special-defense":
      return "#1A9917"
    case "speed":
      return "#4B2C8D"
    default:
      return ""
  }
}
