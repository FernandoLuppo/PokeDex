import userPhoto from "../../../../../../shared/image/user-photo.jpg"
import * as S from "./userMenu.styles"
import { Button, SecondaryButton } from "../../../../../../shared/components"
import { useNavigate } from "react-router-dom"
import type { IResponse } from "../../../../../../shared/types"

interface IProps {
  islogged: "false" | "true"
  userInfos: IResponse | undefined
}

export const UserMenu: React.FC<IProps> = ({ islogged, userInfos }) => {
  const navigate = useNavigate()

  const handleSingUp = (): void => {
    navigate("/register")
  }

  const handleLogin = (): void => {
    navigate("/login")
  }
  return (
    <S.ContainerUser islogged={islogged}>
      {islogged === "true" ? (
        <>
          <S.ContainerUserImg>
            <img src={userPhoto} alt="User Photo" />
          </S.ContainerUserImg>
          <p>{userInfos?.data.data.name}</p>
          <S.ContainerMyProfileButton>
            <Button isbig={undefined} text="My Profile" />
          </S.ContainerMyProfileButton>
        </>
      ) : (
        <S.ContainerUser islogged={islogged}>
          <Button text="Sing up" isbig={undefined} onClick={handleSingUp} />
          <SecondaryButton
            text="Log in"
            isbig={undefined}
            onClick={handleLogin}
          />
        </S.ContainerUser>
      )}
    </S.ContainerUser>
  )
}
