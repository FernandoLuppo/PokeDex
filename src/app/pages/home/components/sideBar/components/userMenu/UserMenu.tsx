import userPhoto from "../../../../../../shared/image/user-photo.jpg"
import * as S from "./userMenu.styles"
import { Button, SecondaryButton } from "../../../../../../shared/components"
import { useNavigate } from "react-router-dom"
import type { IResponse } from "../../../../../../shared/types"

interface IProps {
  isLogged: boolean
  userInfos: IResponse | undefined
}

export const UserMenu: React.FC<IProps> = ({ isLogged, userInfos }) => {
  const navigate = useNavigate()

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
