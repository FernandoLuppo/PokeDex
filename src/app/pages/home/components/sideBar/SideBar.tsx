import * as S from "./SideBar.styles"
import { Filter } from "./components"
import { Logout, UserMenu } from "../../../../shared/components"

export const SideBar: React.FC = () => {
  return (
    <S.ContainerSideBar>
      <UserMenu />
      <Filter />
      <Logout />
    </S.ContainerSideBar>
  )
}
