export const wordsAndNumbers = (inputData: string): string => {
  let value = inputData
  value = value.replace(/[^a-zA-Z0-9]+/g, "")

  inputData = value

  return inputData
}
