import { pokemonBaseStatsColor, pokemonColor, pokemonStatsColor } from ".."

describe("pokemonColor.ts", () => {
  describe("pokemonColor()", () => {
    it("Should return a color referring to the type of pokemon", () => {
      const type = "fire"
      const result = pokemonColor(type)

      expect(result).toBe("#EE8130")

      //  Types colors

      //  "normal": "#A8A77A"
      //  "fire": "#EE8130"
      //  "water": "#6390F0"
      //  "electric": "#F7D02C"
      //  "grass": "#7AC74C"
      //  "ice": "#96D9D6"
      //  "fighting":  #C22E28"
      //  "poison": "#A33EA1"
      //  "ground": "#E2BF65"
      //  "flying": "#A98FF3"
      //  "psychic": "#F95587"
      //  "bug": "#A6B91A"
      //  "rock": "#B6A136"
      //  "ghost": "#735797"
      //  "dragon": "#6F35FC"
      //  "dark": "#705746"
      //  "steel": "#B7B7CE"
      //  "fairy": "#D685AD"
    })
  })

  describe("pokemonStatsColor()", () => {
    it("Should return a color referring to the stats of pokemon", () => {
      const type = "hp"
      const result = pokemonStatsColor(type)

      expect(result).toBe("#D96C6C")

      //  Stats colors

      //  "hp": "#D96C6C"
      //  "attack": "#D99A6C"
      //  "defense": "#D9C76C"
      //  "special-attack": "#6C98D9"
      //  "special-defense": "#6FD96C"
      //  "speed": "#8F6CD9"
    })
  })

  describe("pokemonBaseStatsColor()", () => {
    it("Should return a color referring to the base stats of pokemon", () => {
      const type = "hp"
      const result = pokemonBaseStatsColor(type)

      expect(result).toBe("#CC1F1F")

      //  Base stats colors

      //  "hp": "#CC1F1F"
      //  "attack": "#CC671F"
      //  "defense": "#B29812"
      //  "special-attack": "#1F64CC"
      //  "special-defense": "#1A9917"
      //  "speed": "#4B2C8D"
    })
  })
})
