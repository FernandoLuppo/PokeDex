import { buildingUserTeam } from "./buildingUserTeam"

describe("buildingUserTeam.ts", () => {
  it("Should complete the team with empty data", () => {
    const data = [
      {
        genericInfos: {
          name: "",
          id: 0,
          sprit: ""
        },
        types: [{ type: "" }]
      }
    ]

    const buildTeam = buildingUserTeam(data)

    if (buildTeam !== undefined) {
      expect(buildTeam?.length).toBe(6)
      expect(buildTeam[0]).toHaveProperty("genericInfos")
      expect(buildTeam[0]).toHaveProperty("types")
    }
  })
})
