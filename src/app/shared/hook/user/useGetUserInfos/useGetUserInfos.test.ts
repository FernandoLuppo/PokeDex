import { useGetUserInfos } from ".."
import { get } from "../../../service"

jest.mock("../../../service", () => ({
  get: jest.fn()
}))

describe("useGetUSerInfos.ts", () => {
  it("Should return a data without errors", async () => {
    const res = { data: { message: "test" } }
    ;(get as jest.Mock).mockResolvedValue(res)

    const result: any = await useGetUserInfos()

    expect(result).toHaveProperty("data")
    expect(result.data).toBeDefined()
    expect(result).toHaveProperty("isError")
    expect(result.isError).toBeFalsy()
    expect(result).toHaveProperty("error")
    expect(result).toHaveProperty("callRouteAgain")
    expect(result.callRouteAgain).toBeFalsy()
  })

  it("Should enter the token expiration if, and with that return the value of callRouteAgain as true", async () => {
    const resError = { response: { data: { error: "Error" } } }
    ;(get as jest.Mock).mockResolvedValue(resError)

    const result: any = await useGetUserInfos()

    expect(result.callRouteAgain).toBeTruthy()
    expect(result.isError).toBeFalsy()
  })

  it("Should return a error when try get user infos", async () => {
    ;(get as jest.Mock).mockRejectedValue({})

    const result: any = await useGetUserInfos()

    expect(result.isError).toBeTruthy()
  })
})
