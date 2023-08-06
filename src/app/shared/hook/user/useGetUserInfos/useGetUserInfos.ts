import { useGet, useNewCookies } from "../.."

export const useGetUserInfos = async (): Promise<{
  data: any
  error: any
  isError: boolean
  callRouteAgain: boolean
}> => {
  const result = { data: {}, isError: false, error: {}, callRouteAgain: false }

  try {
    const user: any = await useGet("/user/infos")

    if (user.response !== undefined) {
      useNewCookies(user.response.data.error)
      result.callRouteAgain = true
      return result
    }

    result.data = user.data
    return result
  } catch (err) {
    const error = err as Error
    result.error = error
    result.isError = true
    return result
  }
}
