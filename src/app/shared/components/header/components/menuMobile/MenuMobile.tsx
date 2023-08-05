import * as S from "./menuMobile.styles"
import { IoMdClose } from "react-icons/io"
import { Logout } from "../../.."
import { UserMenu } from "../../../../../pages/home/components/sideBar/components"

interface IMenuMobileProps {
  menuIsVisible: "true" | "false"
  setMenuIsVisible: React.Dispatch<React.SetStateAction<"true" | "false">>
}

export const MenuMobile: React.FC<IMenuMobileProps> = ({
  menuIsVisible,
  setMenuIsVisible
}) => {
  console.log(menuIsVisible)
  return (
    <S.containerMenuMobile isvisible={menuIsVisible}>
      <IoMdClose
        role="button"
        color="#f2f2f2"
        size={40}
        onClick={() => {
          console.log("ola")
          setMenuIsVisible("false")
          console.log(menuIsVisible)
        }}
      />
      <UserMenu />
      <Logout />
    </S.containerMenuMobile>
  )
}
