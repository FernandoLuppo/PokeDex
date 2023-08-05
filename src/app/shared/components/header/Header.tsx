import * as S from "./header.styles"
import ultraBall from "../../image/ultra-ball.png"
import { SearchBar, MenuMobile } from "./components"
import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"

export const Header: React.FC = () => {
  const [menuIsVisible, setMenuIsVisible] = useState<"false" | "true">("false")

  return (
    <S.Header>
      <div>
        <S.HeaderImg src={ultraBall} alt="Logo" />
        <h1>LuppoTW Pokedex</h1>
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

      {menuIsVisible === "true" && (
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
      )}
    </S.Header>
  )
}
