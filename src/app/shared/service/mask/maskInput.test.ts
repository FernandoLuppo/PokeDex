import { wordsAndNumbers } from "./maskInput"

describe("InputMask.ts", () => {
  it("Should contain just letters and numbers", () => {
    const result = wordsAndNumbers("Abc123!@#")

    expect(result).toBe("Abc123")
  })
})
