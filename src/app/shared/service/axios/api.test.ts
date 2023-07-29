import { Api } from "./apiConfig"

describe("api.ts", () => {
  let axiosInstance: any
  let getSpy: any
  let postSpy: any
  let putSpy: any
  let excludeSpy: any

  beforeEach(() => {
    axiosInstance = Api()
    getSpy = jest.spyOn(axiosInstance, "get")
    postSpy = jest.spyOn(axiosInstance, "post")
    putSpy = jest.spyOn(axiosInstance, "put")
    excludeSpy = jest.spyOn(axiosInstance, "delete")
  })

  afterEach(() => {
    getSpy.mockClear()
    postSpy.mockClear()
    putSpy.mockClear()
    excludeSpy.mockClear()
  })

  describe("get", () => {
    it("Should call the get function just once", async () => {
      const resolvedValue = "Value is resolved"
      getSpy.mockResolvedValue(resolvedValue)

      const getInfo = await axiosInstance.get("/test")

      expect(getSpy).toBeCalledTimes(1)
      expect(getInfo).toBe(resolvedValue)
    })
  })
  describe("post", () => {
    it("Should call the post function just once", async () => {
      const resolvedValue = "Value is resolved"
      const sendValue = "Value to send"

      postSpy.mockResolvedValue(resolvedValue)
      const postInfo = await axiosInstance.post("/test", { sendValue })

      expect(postSpy).toBeCalledTimes(1)
      expect(postInfo).toBe(resolvedValue)
    })
  })
  describe("put", () => {
    it("Should call the put function just once", async () => {
      const resolvedValue = "Value is resolved"
      const sendValue = "Value to send"

      putSpy.mockResolvedValue(resolvedValue)
      const putInfo = await axiosInstance.put("/test", { sendValue })

      expect(putSpy).toBeCalledTimes(1)
      expect(putInfo).toBe(resolvedValue)
    })
  })
  describe("exclude", () => {
    it("Should call the exclude function just once", async () => {
      const resolvedValue = "Value is resolved"
      const sendValue = "Value to send"

      excludeSpy.mockResolvedValue(resolvedValue)
      const excludeInfo = await axiosInstance.delete("/test", { sendValue })

      expect(excludeSpy).toBeCalledTimes(1)
      expect(excludeInfo).toBe(resolvedValue)
    })
  })
})
