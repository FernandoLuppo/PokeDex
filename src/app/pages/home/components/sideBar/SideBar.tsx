import * as S from "./SideBar.styles"
import { Filter, UserMenu } from "./components"
import { Logout } from "../../../../shared/components"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../shared/context"
import type { IResponse } from "../../../../shared/types"
import { useGetUserInfos } from "../../../../shared/hook"

export const SideBar: React.FC = () => {
  const { accessToken } = useContext(AuthContext)
  const [userIsLogged, setUserIsLogged] = useState<"false" | "true">("false")
  const [userInfos, setUserInfos] = useState<IResponse | string>()

  useEffect(() => {
    if (accessToken !== null) {
      setUserIsLogged("true")
    }

    if (userIsLogged === "true") {
      useGetUserInfos()
        .then(({ data }: IResponse) => {
          if (data.isError) {
            alert("Failed to load user information")
            return
          }
          setUserInfos(data.data.name)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [accessToken, userIsLogged])

  return (
    <S.ContainerSideBar>
      <UserMenu islogged={userIsLogged} userInfos={userInfos as string} />
      <Filter />
      {userIsLogged === "true" && <Logout />}
    </S.ContainerSideBar>
  )
}
