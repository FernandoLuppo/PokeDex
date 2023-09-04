import { useGet } from ".."

import type { IResponse } from "../../../types"

const data: IResponse = {
  data: { message: "", isError: false, error: "", data: {} }
}

jest.mock("../../../service", () => ({
  get: jest.fn().mockResolvedValue(data)
}))

describe("useGet.ts", () => {
  it("Should return a IResponse object", async () => {
    const { data } = await useGet("/test")

    expect(data).toHaveProperty("message")
    expect(data).toHaveProperty("isError")
    expect(data).toHaveProperty("error")
    expect(data).toHaveProperty("data")
  })
})
