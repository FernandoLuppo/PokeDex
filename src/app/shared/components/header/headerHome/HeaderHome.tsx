import * as S from "./headerHome.styles"
import ultraBall from "../../../image/ultra-ball.png"
import { SearchBar } from "./components"
import { useContext, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { UserGetInfosContext } from "../../../context"
import { MenuMobile } from "../menuMobile/MenuMobile"

export const HeaderHome: React.FC = () => {
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
        <SearchBar data-testid="search-bar" />
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
