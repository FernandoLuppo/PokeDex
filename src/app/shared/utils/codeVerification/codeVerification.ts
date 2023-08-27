export const codeVerification = (
  userCode: number[] | null,
  emailCode: string
): { isError: boolean; fullCode: string } => {
  let data = { isError: true, fullCode: "" }

  const fullCode = userCode?.join("")

  if (fullCode !== undefined && fullCode !== emailCode) {
    data = { fullCode, isError: false }
    return data
  }

  return data
}
