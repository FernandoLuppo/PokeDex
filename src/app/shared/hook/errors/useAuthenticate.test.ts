import { useAuthenticate } from "./useAuthenticate"

describe("useAuthenticate.ts", () => {
  it("Should return just a string as email error", () => {
    const error = "User already exist"
    const authenticate = useAuthenticate(error)

    expect(authenticate).toMatchObject({
      email: ["User already exist"],
      name: [],
      password: []
    })
  })

  it("Should return error in name, email and password", () => {
    const error = [
      "Name needs to have at least 3 characters",
      "Input name can't be empty",
      "Email needs to have at least 3 characters",
      "Input email can't be empty",
      "Password needs to have at least 3 characters",
      "Input password can't be empty"
    ]
    const authenticate = useAuthenticate(error)

    expect(authenticate).toMatchObject({
      name: [
        "Name needs to have at least 3 characters",
        "Input name can't be empty"
      ],
      email: [
        "Email needs to have at least 3 characters",
        "Input email can't be empty"
      ],
      password: [
        "Password needs to have at least 3 characters",
        "Input password can't be empty"
      ]
    })
  })
})
