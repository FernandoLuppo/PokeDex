import type { IUseAuthenticate } from "../../types"

export const useAuthenticate = (
  values: string[] | string
): IUseAuthenticate => {
  const name: string[] = []
  const email: string[] = []
  const password: string[] = []

  function isString(value: any): value is string {
    return typeof value === "string"
  }

  if (isString(values)) {
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
