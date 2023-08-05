import { get } from "../../../service"
import type { IResponse } from "../../../types"

export const useGet = async (url: string): Promise<IResponse> => {
  const data = await get(url)

  function isResponse(value: IResponse): value is IResponse {
    return "isError" in value
  }

  if (isResponse(data)) {
    return data
  }

  return data
}
