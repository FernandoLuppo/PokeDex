import * as S from "./headerDefault.styles"
import { useContext, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { Nav } from "./components"
import { MenuMobile } from "../menuMobile/MenuMobile"
import { UserGetInfosContext } from "../../../context"
import ultraBall from "../../../image/ultra-ball.png"

export const HeaderDefault: React.FC = () => {
  const [menuIsVisible, setMenuIsVisible] = useState<
    "true" | "false" | "closed"
  >("closed")

  const { userInfos, userIsLogged } = useContext(UserGetInfosContext)

  return (
    <S.Header>
      <div>
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
