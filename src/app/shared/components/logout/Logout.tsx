import { useCallback } from "react"
import * as S from "./logout.styles"
import { get } from "../../service"

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
