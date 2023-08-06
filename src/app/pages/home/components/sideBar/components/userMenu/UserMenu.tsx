import userPhoto from "../../../../../../shared/image/user-photo.jpg"
import * as S from "./userMenu.styles"
import { Button, SecondaryButton } from "../../../../../../shared/components"
import { useNavigate } from "react-router-dom"

interface IProps {
  islogged: "false" | "true"
  userInfos: string
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
          <p>{userInfos}</p>
          <S.ContainerMyProfileButton>
            <Button isbig={undefined} text="My Profile" />
          </S.ContainerMyProfileButton>
        </>
      ) : (
        <>
          <Button text="Sing up" isbig={undefined} onClick={handleSingUp} />
          <SecondaryButton
            text="Log in"
            isbig={undefined}
            onClick={handleLogin}
          />
        </>
      )}
    </S.ContainerUser>
  )
}
