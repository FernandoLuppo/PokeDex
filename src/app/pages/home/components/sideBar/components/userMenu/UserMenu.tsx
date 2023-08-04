import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../../../shared/context"
import userPhoto from "../../../../../../shared/image/user-photo.jpg"
import * as S from "./userMenu.styles"
import { Button, SecondaryButton } from "../../../../../../shared/components"

export const UserMenu: React.FC = () => {
  const { accessToken } = useContext(AuthContext)
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    if (accessToken !== undefined && accessToken !== null) {
      setIsLogged(true)
    }
  }, [accessToken, isLogged])

  return (
    <S.ContainerUser>
      {isLogged ? (
        <>
          <S.ContainerUserImg>
            <img src={userPhoto} alt="User Photo" />
          </S.ContainerUserImg>
          <p>User Name</p>
          <S.ContainerMyProfileButton>
            <button>My Profile</button>
          </S.ContainerMyProfileButton>
        </>
      ) : (
        <S.ContainerUser>
          <Button text="Sing up" isBig={false} />
          <SecondaryButton text="Log in" isBig={false} />
        </S.ContainerUser>
      )}
    </S.ContainerUser>
  )
}
