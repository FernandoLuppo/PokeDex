import * as S from "./SideBar.styles"
import { UserMenu } from "./components"
import { LoadingPage, Logout } from "../../../../shared/components"
import { UserGetInfosContext } from "../../../../shared/context"
import { useContext } from "react"

export const SideBar: React.FC = () => {
  const { userInfos, userIsLogged } = useContext(UserGetInfosContext)

  return (
    <S.ContainerSideBar>
      {(userIsLogged === "true" && userInfos !== undefined) ||
      userIsLogged === "false" ? (
        <>
          <UserMenu islogged={userIsLogged} userName={userInfos.name} />
          {userIsLogged === "true" && <Logout />}
        </>
      ) : (
        <LoadingPage />
      )}
    </S.ContainerSideBar>
  )
}
