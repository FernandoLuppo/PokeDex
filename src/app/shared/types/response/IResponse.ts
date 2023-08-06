export interface IResponse {
  data: {
    message: string
    isError: boolean
    error: string
    data?: any
  }
}
