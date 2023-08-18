import * as S from "./userProfile.styles"
import { HeaderDefault } from "../../shared/components"
import { PokemonTeam, UserMenu } from "./components"

export const UserProfile: React.FC = () => {
  return (
    <div>
      <HeaderDefault />
      <S.ContainerUserProfile>
        <S.FirstSection>
          <UserMenu />
          <PokemonTeam />
        </S.FirstSection>
      </S.ContainerUserProfile>
    </div>
  )
}
