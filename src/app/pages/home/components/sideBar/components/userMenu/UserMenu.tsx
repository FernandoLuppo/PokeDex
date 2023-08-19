import userPhoto from "../../../../../../shared/image/user-photo.jpg"
import * as S from "./userMenu.styles"
import { Button, SecondaryButton } from "../../../../../../shared/components"
import { useLocation, useNavigate } from "react-router-dom"
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

  const navigateToHome = useCallback(() => {
    navigate("/")
  }, [])

  const location = useLocation()
  const currentPath = location.pathname

  return (
    <S.ContainerUser islogged={islogged}>
      {islogged === "true" ? (
        <>
          <S.ContainerUserImg>
            <img src={userPhoto} alt="User Photo" />
          </S.ContainerUserImg>
          <p>{userName}</p>
          <S.ContainerMyProfileButton>
            {currentPath === "/" ? (
              <Button
                isbig={undefined}
                text="My Profile"
                onClick={handleClick}
              />
            ) : (
              <Button isbig={undefined} text="Home" onClick={navigateToHome} />
            )}
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
