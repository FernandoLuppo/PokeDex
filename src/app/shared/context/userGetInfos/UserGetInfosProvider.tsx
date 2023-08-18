import { useContext, useEffect, useState } from "react"
import { AuthContext } from ".."
import type { IResponse } from "../../types"
import { useGetUserInfos } from "../../hook"
import { UserGetInfosContext } from "./UserGetInfosContext"

interface IUserInfos {
  name: string
  email: string
}

export const UserGetInfosProvider = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  const { accessToken } = useContext(AuthContext)
  const [userIsLogged, setUserIsLogged] = useState<"false" | "true">("false")
  const [userInfos, setUserInfos] = useState<IUserInfos>({
    name: "",
    email: ""
  })

  useEffect(() => {
    if (accessToken !== null) {
      setUserIsLogged("true")
    }
  }, [accessToken])

  useEffect(() => {
    if (userIsLogged === "true") {
      useGetUserInfos()
        .then(({ data }: IResponse) => {
          if (data.isError) {
            alert("Failed to load user information")
            return
          }
          setUserInfos(data.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [userIsLogged, setUserInfos])

  return (
    <UserGetInfosContext.Provider value={{ userIsLogged, userInfos }}>
      {children}
    </UserGetInfosContext.Provider>
  )
}
