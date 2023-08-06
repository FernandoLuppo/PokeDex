import * as S from "./header.styles"
import ultraBall from "../../image/ultra-ball.png"
import { SearchBar } from "./components"
import { useContext, useEffect, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { Logout } from ".."
import { UserMenu } from "../../../pages/home/components/sideBar/components"
import { AuthContext } from "../../context"
import type { IResponse } from "../../types"
import { useGetUserInfos } from "../../hook"

export const Header: React.FC = () => {
  const [menuIsVisible, setMenuIsVisible] = useState<
    "true" | "false" | "closed"
  >("closed")

  const { accessToken } = useContext(AuthContext)
  const [userIsLogged, setUserIsLogged] = useState<"false" | "true">("false")
  const [userInfos, setUserInfos] = useState<IResponse | string>()

  useEffect(() => {
    if (accessToken !== null) {
      setUserIsLogged("true")
    }

    if (userIsLogged === "true") {
      useGetUserInfos()
        .then(({ data }: IResponse) => {
          if (data.isError) {
            alert("Failed to load user information")
            return
          }
          setUserInfos(data.data.name)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [accessToken, userIsLogged])

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

      {menuIsVisible !== "closed" && (
        <S.containerMenuMobile isvisible={menuIsVisible}>
          <IoMdClose
            role="button"
            color="#f2f2f2"
            size={40}
            onClick={() => {
              setMenuIsVisible("false")
            }}
          />
          <UserMenu islogged={userIsLogged} userInfos={userInfos as string} />
          <Logout />
        </S.containerMenuMobile>
      )}
    </S.Header>
  )
}
