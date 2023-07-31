import { createContext } from "react"
import type { IRoutesAuthenticate } from "../../types"

export const AuthContext = createContext<IRoutesAuthenticate>({
  accessToken: null,
  refreshToken: null,
  async newCookies() {
    await Promise.resolve()
  }
})
