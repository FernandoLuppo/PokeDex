import { createContext } from "react"

interface IProps {
  userIsLogged: "false" | "true"
  userInfos: IUserInfos
}

interface IUserInfos {
  name: string
  email: string
}

export const UserGetInfosContext = createContext<IProps>({
  userIsLogged: "false",
  userInfos: { name: "", email: "" }
})
