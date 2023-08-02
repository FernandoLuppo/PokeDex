import * as S from "./menuMobile.styles"
import { IoMdClose } from "react-icons/io"
import { UserMenu, Logout } from "../../.."

interface IMenuMobileProps {
  menuIsVisible: boolean
  setMenuIsVisible: (isVisible: boolean) => void
}

export const MenuMobile: React.FC<IMenuMobileProps> = ({
  menuIsVisible,
  setMenuIsVisible
}) => {
  return (
    <S.containerMenuMobile isVisible={menuIsVisible}>
      <IoMdClose
        role="button"
        color="#f2f2f2"
        size={25}
        onClick={() => {
          setMenuIsVisible(false)
        }}
      />
      <UserMenu />
      <Logout />
    </S.containerMenuMobile>
  )
}
