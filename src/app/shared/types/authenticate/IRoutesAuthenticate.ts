export interface IRoutesAuthenticate {
  accessToken: string | null
  refreshToken: string | null
  newCookies: () => Promise<void>
}
