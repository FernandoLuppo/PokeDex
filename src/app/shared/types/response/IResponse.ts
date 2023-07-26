export interface IResponse {
  data: {
    message: string
    isError: boolean
    error: string
    data?: any
  }
}

export interface IResponseValidationError {
  response: {
    data: any
  }
}
