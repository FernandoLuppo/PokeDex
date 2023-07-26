import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./AuthRequire"
import { useCookies } from "../../hook"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate()

  const [accessToken, setAccessToken] = useState<string | null | undefined>(
    null
  )
  const [refreshToken, setRefreshToken] = useState<string | null | undefined>(
    null
  )

  useEffect(() => {
    const validateCookie = (): void => {
      const accessTokenValue = useCookies("accessToken")
      const refreshTokenValue = useCookies("refreshToken")
      setAccessToken(accessTokenValue)
      setRefreshToken(refreshTokenValue)
    }
    validateCookie()
  }, [])

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken }}>
      {children}
    </AuthContext.Provider>
  )
}
