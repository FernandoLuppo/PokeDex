import type { IUseAuthenticate } from "../../types"

export const useAuthenticate = (
  values: string[] | string
): IUseAuthenticate => {
  const name: string[] = []
  const email: string[] = []
  const password: string[] = []
  let incorrectCredentials: string = ""

  function isString(value: any): value is string {
    return typeof value === "string"
  }

  if (isString(values)) {
    if (values === "Email or password incorrect") {
      incorrectCredentials = values
      return { name, email, password, incorrectCredentials }
    }
    email.push(values)
    return { name, email, password }
  }

  values.forEach((value: string) => {
    if (value.includes("name") || value.includes("Name")) {
      name.push(value)
    }
    if (value.includes("email") || value.includes("Email")) {
      email.push(value)
    }
    if (value.includes("password") || value.includes("Password")) {
      password.push(value)
    }
  })
  return { name, email, password }
}
