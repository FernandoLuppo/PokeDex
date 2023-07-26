import type { AxiosResponse } from "axios"
import { Api } from "../../service"
import type { IResponse, IResponseValidationError } from "../../types"

export const get = async (url: string): Promise<AxiosResponse<any, any>> => {
  const response = await Api().get(`${url}`)
  return response
}

export const post = async (
  info: any,
  url: string
): Promise<IResponse | IResponseValidationError> => {
  try {
    const data: IResponse = await Api().post(`${url}`, info)
    return data
  } catch (err) {
    const error = err as IResponseValidationError
    return error
  }
}

export const put = async (
  info: any,
  url: string
): Promise<AxiosResponse<any, any>> => {
  const response = await Api().put(`${url}`, info)
  return response
}

export const exclude = async (
  info: any,
  url: string
): Promise<AxiosResponse<any, any>> => {
  const response = await Api().delete(`${url}`, info)
  return response
}
