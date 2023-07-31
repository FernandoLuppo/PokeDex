import { useEffect, useState } from "react"

import { AuthContext } from "./AuthContext"
import { useCookies } from "../../hook"
import { get } from "../../service"

export const AuthProvider = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [refreshToken, setRefreshToken] = useState<string | null>(null)

  useEffect(() => {
    const validateCookie = (): void => {
      const accessTokenValue = useCookies("accessToken")
      const refreshTokenValue = useCookies("refreshToken")

      if (accessTokenValue === undefined || refreshTokenValue === undefined) {
        return
      }

      setAccessToken(accessTokenValue)
      setRefreshToken(refreshTokenValue)
    }
    validateCookie()
  }, [accessToken, refreshToken])

  const newCookies = async (): Promise<void> => {
    await get("/token/new-token")
  }

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, newCookies }}>
      {children}
    </AuthContext.Provider>
  )
}
