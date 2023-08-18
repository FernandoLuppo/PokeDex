import userPhoto from "../../../../../../shared/image/user-photo.jpg"
import * as S from "./userMenu.styles"
import { Button, SecondaryButton } from "../../../../../../shared/components"
import { useNavigate } from "react-router-dom"
import { useCallback } from "react"

interface IProps {
  islogged: "false" | "true"
  userName: string
}

export const UserMenu: React.FC<IProps> = ({ islogged, userName }) => {
  const navigate = useNavigate()

  const handleSingUp = useCallback(() => {
    navigate("/register")
  }, [])

  const handleLogin = useCallback(() => {
    navigate("/login")
  }, [])

  const handleClick = useCallback(() => {
    navigate(`/user/${userName.toLowerCase()}`)
  }, [userName])

  return (
    <S.ContainerUser islogged={islogged}>
      {islogged === "true" ? (
        <>
          <S.ContainerUserImg>
            <img src={userPhoto} alt="User Photo" />
          </S.ContainerUserImg>
          <p>{userName}</p>
          <S.ContainerMyProfileButton>
            <Button isbig={undefined} text="My Profile" onClick={handleClick} />
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
