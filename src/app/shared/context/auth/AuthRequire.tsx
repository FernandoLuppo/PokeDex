import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Login } from "../../../pages"

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
