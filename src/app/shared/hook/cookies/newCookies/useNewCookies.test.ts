import { useNewCookies } from ".."
import { get } from "../../../service"

jest.mock("../../../service", () => ({
  get: jest.fn().mockResolvedValue({})
}))

describe("useNewCookies.ts", () => {
  it("Should call the cookie route", () => {
    const data = "jwt expired"

    useNewCookies(data)

    expect(get).toHaveBeenCalled()
    expect(get).toHaveBeenCalledWith("/token/new-token")
  })
})
