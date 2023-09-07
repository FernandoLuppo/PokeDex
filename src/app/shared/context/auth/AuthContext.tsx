import type { IRoutesAuthenticate } from "../../types"
import { createContext } from "react"

export const AuthContext = createContext<IRoutesAuthenticate>({
  accessToken: null,
  refreshToken: null,
  async newCookies() {
    await Promise.resolve()
  }
})
