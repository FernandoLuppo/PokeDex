import { Api } from "./apiConfig"
import type { IResponse } from "../../types"

export const get = async (url: string): Promise<IResponse | any> => {
  try {
    const data: IResponse = await Api().get(`${url}`)
    return data
  } catch (err) {
    const error = err as any
    return error
  }
}

export const post = async (
  url: string,
  info: any
): Promise<IResponse | any> => {
  try {
    const data: IResponse = await Api().post(`${url}`, info)
    return data
  } catch (err) {
    const error = err as any
    return error
  }
}

export const put = async (url: string, info: any): Promise<IResponse | any> => {
  try {
    const data: IResponse = await Api().put(`${url}`, info)
    return data
  } catch (err) {
    const error = err as any
    return error
  }
}

export const exclude = async (url: string): Promise<IResponse | any> => {
  try {
    const data: IResponse = await Api().delete(`${url}`)
    return data
  } catch (err) {
    const error = err as any
    return error
  }
}
