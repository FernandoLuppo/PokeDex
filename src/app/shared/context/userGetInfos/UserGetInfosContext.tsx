import { createContext } from "react"

interface IProps {
  userIsLogged: "false" | "true"
  userInfos: string | undefined
}

export const UserGetInfosContext = createContext<IProps>({
  userIsLogged: "false",
  userInfos: undefined
})
