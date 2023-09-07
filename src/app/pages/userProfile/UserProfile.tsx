import * as S from "./userProfile.styles"
import { HeaderDefault, LoadingPage } from "../../shared/components"
import { PokemonTeam, UserMenu, PokemonStats } from "./components"
import { get } from "../../shared/service"
import { buildingUserTeam } from "../../shared/utils"
import type { IPokemon } from "../../shared/types"
import { useEffect, useState } from "react"

export const UserProfile: React.FC = () => {
  const [team, setTeam] = useState<IPokemon[]>([])
  const [teamIsLoaded, setTeamIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    get("/pokemon/team")
      .then(userTeam => {
        const { data } = userTeam.data

        const newTeam = buildingUserTeam(data)
        if (newTeam === undefined) {
          setTeam(data)
          setTeamIsLoaded(true)
          return
        }

        setTeam(newTeam)
        setTeamIsLoaded(true)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <HeaderDefault />
      <S.ContainerUserProfile>
        {teamIsLoaded ? (
          <>
            <S.FirstSection>
              <UserMenu />
              <PokemonTeam team={team} teamIsLoaded={teamIsLoaded} />
            </S.FirstSection>
            <PokemonStats pokemonStats={team} />
          </>
        ) : (
          <LoadingPage />
        )}
      </S.ContainerUserProfile>
    </div>
  )
}
