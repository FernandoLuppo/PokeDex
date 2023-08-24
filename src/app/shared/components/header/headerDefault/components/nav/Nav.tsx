import * as S from "./nav.styles"
import { useCallback, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { get } from "../../../../../service"
import { UserGetInfosContext } from "../../../../../context"

export const Nav: React.FC = () => {
  const navigate = useNavigate()
  const { userIsLogged } = useContext(UserGetInfosContext)

  const handleNavigate = useCallback(() => {
    navigate("/")
  }, [])

  const handleLogout = useCallback(() => {
    get("/user/logout")
      .then(() => {
        window.location.href = "/"
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <S.ContainerNav>
      <button onClick={handleNavigate}>Home</button>
      {userIsLogged === "true" && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </S.ContainerNav>
  )
}
