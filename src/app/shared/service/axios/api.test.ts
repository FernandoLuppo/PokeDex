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
      expect(getInfo).toBeDefined()
      expect(getInfo).toBe(resolvedValue)
    })

    it("Should return a error when try execute the get function", async () => {
      const errorMessage = "Error occurred during GET request"
      getSpy.mockRejectedValue(new Error(errorMessage))

      try {
        await axiosInstance.get("/test")
      } catch (err) {
        const error = err as Error
        expect(getSpy).toBeCalledTimes(1)
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toBe(errorMessage)
      }
    })
  })
  describe("post", () => {
    it("Should call the post function just once", async () => {
      const resolvedValue = "Value is resolved"
      const sendValue = "Value to send"

      postSpy.mockResolvedValue(resolvedValue)
      const postInfo = await axiosInstance.post("/test", { sendValue })

      expect(postSpy).toBeCalledTimes(1)
      expect(postInfo).toBeDefined()
      expect(postInfo).toBe(resolvedValue)
    })

    it("Should return a error when try execute the post function", async () => {
      const errorMessage = "Error occurred during POST request"
      const sendValue = "Value to send"
      postSpy.mockRejectedValue(new Error(errorMessage))
      try {
        await axiosInstance.post("/test", { sendValue })
      } catch (err) {
        const error = err as Error
        expect(postSpy).toBeCalledTimes(1)
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toBe(errorMessage)
      }
    })
  })
  describe("put", () => {
    it("Should call the put function just once", async () => {
      const resolvedValue = "Value is resolved"
      const sendValue = "Value to send"

      putSpy.mockResolvedValue(resolvedValue)
      const putInfo = await axiosInstance.put("/test", { sendValue })

      expect(putSpy).toBeCalledTimes(1)
      expect(putInfo).toBeDefined()
      expect(putInfo).toBe(resolvedValue)
    })

    it("Should return a error when try execute the put function", async () => {
      const errorMessage = "Error occurred during PUT request"
      const sendValue = "Value to send"

      putSpy.mockRejectedValue(new Error(errorMessage))

      try {
        await axiosInstance.put("/test", { sendValue })
      } catch (err) {
        const error = err as Error
        expect(putSpy).toBeCalledTimes(1)
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toBe(errorMessage)
      }
    })
  })
  describe("exclude", () => {
    it("Should call the exclude function just once", async () => {
      const resolvedValue = "Value is resolved"
      const sendValue = "Value to send"

      excludeSpy.mockResolvedValue(resolvedValue)
      const excludeInfo = await axiosInstance.delete("/test", { sendValue })

      expect(excludeSpy).toBeCalledTimes(1)
      expect(excludeInfo).toBeDefined()
      expect(excludeInfo).toBe(resolvedValue)
    })

    it("Should return a error when try execute the exclude function", async () => {
      const errorMessage = "Error occurred during DELETE request"
      const sendValue = "Value to send"

      excludeSpy.mockRejectedValue(new Error(errorMessage))

      try {
        await axiosInstance.delete("/test", { sendValue })
      } catch (err) {
        const error = err as Error
        expect(excludeSpy).toBeCalledTimes(1)
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toBe(errorMessage)
      }
    })
  })
})
