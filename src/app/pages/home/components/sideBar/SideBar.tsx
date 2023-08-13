import * as S from "./SideBar.styles"
import { UserMenu } from "./components"
import { Logout } from "../../../../shared/components"
import { useContext } from "react"
import { UserGetInfosContext } from "../../../../shared/context"

export const SideBar: React.FC = () => {
  const { userInfos, userIsLogged } = useContext(UserGetInfosContext)

  return (
    <S.ContainerSideBar>
      <UserMenu islogged={userIsLogged} userInfos={userInfos as string} />
      {userIsLogged === "true" && <Logout />}
    </S.ContainerSideBar>
  )
}
