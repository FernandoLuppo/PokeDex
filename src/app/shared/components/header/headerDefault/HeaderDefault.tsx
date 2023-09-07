import * as S from "./headerDefault.styles"
import { Nav } from "./components"
import { MenuMobile } from "../menuMobile/MenuMobile"
import { UserGetInfosContext } from "../../../context"
import ultraBall from "../../../image/ultra-ball.png"
import { AiOutlineMenu } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { useCallback, useContext, useState } from "react"

export const HeaderDefault: React.FC = () => {
  const [menuIsVisible, setMenuIsVisible] = useState<
    "true" | "false" | "closed"
  >("closed")

  const navigate = useNavigate()
  const handleClick = useCallback(() => {
    navigate("/")
  }, [])

  const { userInfos, userIsLogged } = useContext(UserGetInfosContext)

  return (
    <S.Header>
      <div onClick={handleClick}>
        <S.HeaderImg src={ultraBall} alt="Logo" />
        <h1>LuppoTW PokeDex</h1>
      </div>

      {window.innerWidth > 900 ? (
        <Nav />
      ) : (
        <AiOutlineMenu
          role="menu"
          size={40}
          color="#f2f2f2"
          onClick={() => {
            setMenuIsVisible("true")
          }}
          data-testid="menu"
        />
      )}

      {menuIsVisible !== "closed" && (
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
          userInfos={userInfos}
          userIsLogged={userIsLogged}
        />
      )}
    </S.Header>
  )
}
