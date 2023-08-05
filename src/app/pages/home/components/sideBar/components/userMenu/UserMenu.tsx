import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../../../shared/context"
import userPhoto from "../../../../../../shared/image/user-photo.jpg"
import * as S from "./userMenu.styles"
import { Button, SecondaryButton } from "../../../../../../shared/components"
import { useGet } from "../../../../../../shared/hook"
import type { IResponse } from "../../../../../../shared/types"
import { useNavigate } from "react-router-dom"

export const UserMenu: React.FC = () => {
  const { accessToken } = useContext(AuthContext)
  const [isLogged, setIsLogged] = useState(false)
  const [userInfos, setUserInfos] = useState<IResponse>()

  const navigate = useNavigate()

  useEffect(() => {
    if (accessToken !== undefined && accessToken !== null) {
      setIsLogged(true)
    }

    useGet("/user/infos")
      .then((user: any) => {
        setUserInfos(user)
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }, [accessToken, isLogged])

  const handleSingUp = (): void => {
    navigate("/register")
  }

  const handleLogin = (): void => {
    navigate("/login")
  }
  return (
    <S.ContainerUser islogged={isLogged}>
      {isLogged ? (
        <>
          <S.ContainerUserImg>
            <img src={userPhoto} alt="User Photo" />
          </S.ContainerUserImg>
          <p>{userInfos?.data.data.name}</p>
          <S.ContainerMyProfileButton>
            <Button isbig={false} text="My Profile" />
          </S.ContainerMyProfileButton>
        </>
      ) : (
        <S.ContainerUser islogged={isLogged}>
          <Button text="Sing up" isbig={false} onClick={handleSingUp} />
          <SecondaryButton text="Log in" isbig={false} onClick={handleLogin} />
        </S.ContainerUser>
      )}
    </S.ContainerUser>
  )
}
