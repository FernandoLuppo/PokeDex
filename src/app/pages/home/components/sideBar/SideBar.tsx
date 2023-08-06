import * as S from "./SideBar.styles"
import { Filter, UserMenu } from "./components"
import { Logout } from "../../../../shared/components"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../shared/context"
import type { IResponse } from "../../../../shared/types"
import { useGetUserInfos } from "../../../../shared/hook"

export const SideBar: React.FC = () => {
  const { accessToken } = useContext(AuthContext)
  const [isLogged, setIsLogged] = useState(false)
  const [userInfos, setUserInfos] = useState<IResponse>()

  useEffect(() => {
    if (accessToken !== null) {
      setIsLogged(true)
    }

    const result = useGetUserInfos()

    if (result.isError) {
      alert("Failed to load user information")
      console.log(result.error)
      return
    }

    setUserInfos(result.data)
  }, [accessToken, isLogged])

  return (
    <S.ContainerSideBar>
      <UserMenu isLogged={isLogged} userInfos={userInfos} />
      <Filter />
      {isLogged && <Logout />}
    </S.ContainerSideBar>
  )
}
