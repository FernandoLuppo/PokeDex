import * as S from "./SideBar.styles"
import { Filter, UserMenu } from "./components"
import { Logout } from "../../../../shared/components"

export const SideBar: React.FC = () => {
  return (
    <S.ContainerSideBar>
      <UserMenu />
      <Filter />
      <Logout />
    </S.ContainerSideBar>
  )
}
