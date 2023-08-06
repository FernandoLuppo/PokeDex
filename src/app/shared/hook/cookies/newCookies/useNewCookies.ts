import { get } from "../../../service"

export const useNewCookies = (data: string): void => {
  console.log(data)

  if (data === "jwt expired") {
    get("/token/new-token").catch(error => {
      console.log(error)
    })
  }
}
