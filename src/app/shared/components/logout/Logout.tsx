import * as S from "./logout.styles"
import { get } from "../../service"
import { useCallback } from "react"

export const Logout: React.FC = () => {
  const handleClick = useCallback(() => {
    get("/user/logout")
      .then(() => {
        window.location.href = "/"
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <S.SideBarLogout>
      <button onClick={handleClick}>Log out</button>
    </S.SideBarLogout>
  )
}
