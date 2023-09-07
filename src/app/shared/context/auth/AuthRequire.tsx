import { AuthContext } from "./AuthContext"
import { Login } from "../../../pages"
import { useContext } from "react"

export const AuthRequire = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  const auth = useContext(AuthContext)

  if (auth.accessToken !== null || auth.accessToken !== undefined) {
    return children
  }
  return <Login />
}
