import { useCookies } from ".."

describe("useCookies.ts", () => {
  afterEach(() => {
    document.cookie = ""
  })

  it("Should format the token", () => {
    const mockAccessToken = "access=token_access_value"
    const mockRefreshToken = "refresh=token_refresh_value"

    document.cookie = mockAccessToken
    document.cookie = mockRefreshToken
    const { access, refresh } = useCookies()

    expect(access).toBe("access=token_access_value")
    expect(refresh).toBe("refresh=token_refresh_value")
  })
})
