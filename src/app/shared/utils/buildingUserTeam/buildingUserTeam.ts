import type { IPokemon } from "../../types"

export const buildingUserTeam = (data: any): any[] | undefined => {
  let newTeam
  if (data !== undefined) {
    const teamMembers = data.length

    if (teamMembers < 6) {
      const emptyPokemon: IPokemon = {
        genericInfos: {
          name: "",
          id: 0,
          sprit: ""
        },
        types: [{ type: "" }]
      }

      newTeam = [...data]
      for (let i = teamMembers; i < 6; i++) {
        newTeam.push(emptyPokemon)
      }

      return newTeam
    }
    return newTeam
  }
  return newTeam
}
