import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { get } from "../../service"
import { useCookies } from "../../hook"

export const AuthProvider = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [refreshToken, setRefreshToken] = useState<string | null>(null)

  useEffect(() => {
    const validateCookie = (): void => {
      const { access, refresh } = useCookies()

      if (access === undefined || refresh === undefined) {
        return
      }

      setAccessToken(access)
      setRefreshToken(refresh)
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
