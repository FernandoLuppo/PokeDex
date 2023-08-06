import { useGet } from "../.."

export const useGetUserInfos = (): {
  data: any
  error: any
  isError: boolean
} => {
  const result = { data: {}, isError: false, error: {} }

  useGet("/user/infos")
    .then((user: any) => {
      result.data = user
      console.log(user)
    })
    .catch((error: Error) => {
      result.error = error
      result.isError = true
    })

  return result
}
