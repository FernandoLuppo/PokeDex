import type {
  IIsResult,
  IResponse,
  IResponseValidationError
} from "../../types"

export const usePost = (value: any): IIsResult => {
  const result = { data: {}, isError: false }

  function separator(
    data: IResponseValidationError | IResponse
  ): data is IResponse {
    return "data" in data
  }

  if (separator(value)) {
    result.data = value.data
    return result
  }

  result.data = value
  result.isError = true

  return result
}
