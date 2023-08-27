import { calcWindowHeight } from "./calcWindowHeight"

describe("calcWindowHeight", () => {
  it("Should return a object with correctly properties", () => {
    const result = calcWindowHeight()

    expect(result).toBeDefined()
    expect(result).toHaveProperty("scrollY")
    expect(result).toHaveProperty("windowHeight")
    expect(result).toHaveProperty("documentHeight")
  })

  it("The properties should be the type numeric", () => {
    const result = calcWindowHeight()

    expect(typeof result.documentHeight).toBe("number")
    expect(typeof result.scrollY).toBe("number")
    expect(typeof result.windowHeight).toBe("number")
  })
})
