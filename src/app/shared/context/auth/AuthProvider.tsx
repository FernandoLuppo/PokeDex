import { AuthContext } from "./AuthContext"
import { get } from "../../service"
import { useCookies } from "../../hook"
import { useEffect, useState } from "react"

export const AuthProvider = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [refreshToken, setRefreshToken] = useState<string | null>(null)

  useEffect(() => {
    const { access, refresh } = useCookies()

    if (access === undefined || refresh === undefined) {
      return
    }

    setAccessToken(access)
    setRefreshToken(refresh)
  }, [accessToken, refreshToken])

  const newCookies = async (): Promise<void> => {
    await get("/token/new-token").catch(error => {
      console.log(error)
    })
  }

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, newCookies }}>
      {children}
    </AuthContext.Provider>
  )
}
