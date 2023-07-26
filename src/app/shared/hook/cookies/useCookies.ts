export const useCookies = (cookieName: string): string | undefined => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${cookieName}=`)

  console.log("useCookies: value", value)
  console.log("useCookies: parts", parts)

  if (parts.length === 2) {
    return parts.pop()?.split(";").shift()
  }
}
