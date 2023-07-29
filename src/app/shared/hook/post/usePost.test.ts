import { usePost } from "./usePost"

describe("usePost.ts", () => {
  it("Should return a valid value in data with isError value false", () => {
    const value = {
      data: {
        value: "Valid Value"
      }
    }
    const result = usePost(value)

    expect(result.data).toBeDefined()
    expect(result.isError).toBeFalsy()
  })

  it("Should return a error in data with isError value true", () => {
    const value = {
      response: {}
    }
    const result = usePost(value)

    expect(result.data).toBeDefined()
    expect(result.isError).toBeTruthy()
  })
})
