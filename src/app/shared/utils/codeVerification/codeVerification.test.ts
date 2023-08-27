import { codeVerification } from ".."

describe("codeVerification.ts", () => {
  it("Should return a valid code", () => {
    const initialCode = [1, 2, 3, 4, 5]
    const email = "test@gmail.com"
    const result = codeVerification(initialCode, email)

    expect(result.fullCode).toBeDefined()
    expect(result.isError).toBeFalsy()
  })

  it("Should return a isError as true", () => {
    const initialCode = null
    const email = ""
    const result = codeVerification(initialCode, email)

    expect(result.fullCode).toBe("")
    expect(result.isError).toBeTruthy()
  })
})
