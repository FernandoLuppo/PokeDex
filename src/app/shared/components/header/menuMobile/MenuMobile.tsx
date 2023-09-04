import * as S from "./menuMobile.styles"
import { Logout } from "../.."
import { IoMdClose } from "react-icons/io"
import { UserMenu } from "../../../../pages/home/components/sideBar/components"

interface IProps {
  menuIsVisible: "true" | "false" | "closed"
  setMenuIsVisible: React.Dispatch<
    React.SetStateAction<"true" | "false" | "closed">
  >
  userInfos: { name: string; email: string }
  userIsLogged: "true" | "false"
}

export const MenuMobile: React.FC<IProps> = ({
  menuIsVisible,
  setMenuIsVisible,
  userInfos,
  userIsLogged
}) => {
  return (
    <S.containerMenuMobile isvisible={menuIsVisible}>
      <IoMdClose
        role="button"
        color="#f2f2f2"
        size={40}
        onClick={() => {
          setMenuIsVisible("false")
        }}
        data-testid="close-menu-mobile"
      />
      <UserMenu islogged={userIsLogged} userName={userInfos.name} />
      {userIsLogged === "true" && <Logout />}
    </S.containerMenuMobile>
  )
}
