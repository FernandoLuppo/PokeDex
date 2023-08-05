import { get } from "../../service"
import type { IResponse, IResponseValidationError } from "../../types"

export const useGet = async (
  url: string
): Promise<IResponse | IResponseValidationError> => {
  const data = await get(url)

  function isResponse(
    value: IResponseValidationError | IResponse
  ): value is IResponse {
    return "isError" in value
  }

  if (isResponse(data)) {
    return data
  }

  return data
}
