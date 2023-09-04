export const useCookies = (): { access: string; refresh: string } => {
  const cookieString = document.cookie
  console.log(cookieString)

  const cookieParts = cookieString.split("; ")

  const access = cookieParts[0]
  const refresh = cookieParts[1]
  return { access, refresh }
}
