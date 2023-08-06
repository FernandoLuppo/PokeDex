import * as S from "./header.styles"
import ultraBall from "../../image/ultra-ball.png"
import { SearchBar } from "./components"
import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { Logout } from ".."
import { UserMenu } from "../../../pages/home/components/sideBar/components"

export const Header: React.FC = () => {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)

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
            setMenuIsVisible(true)
          }}
        />
      )}

      <S.containerMenuMobile isvisible={menuIsVisible}>
        <IoMdClose
          role="button"
          color="#f2f2f2"
          size={40}
          onClick={() => {
            setMenuIsVisible(false)
          }}
        />
        <UserMenu isLogged={false} userInfos={undefined} />
        <Logout />
      </S.containerMenuMobile>
    </S.Header>
  )
}
