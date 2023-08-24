import { post } from "../../service"
import { RecoverPasswordContext } from "./RecoverPasswordContext"
import type { IUseAuthenticate } from "../../types"
import { useAuthenticate, usePost } from "../../hook"
import { useState } from "react"

interface IProps {
  data: { error: IUseAuthenticate } | { userCode: any; isCode: boolean }
}

export const RecoverPasswordProvider = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  const [code, setCode] = useState<number[] | null>(null)
  const [userEmail, setUserEmail] = useState<string>("")

  const recoverPasswordCode = async (email: string): Promise<IProps | any> => {
    try {
      const res = await post("/recover-password/check-email", { email })

      const result = usePost(res)

      if (result.isError) {
        const authenticateErrors = useAuthenticate(
          result.data.response.data.error
        )
        const data = {
          error: authenticateErrors
        }
        return { data }
      }
      setCode(res.data.data.code)
      setUserEmail(res.data.data.email)
      const data = {
        userCode: res.data.data.code,
        isCode: true
      }

      return { data }
    } catch (err) {
      const error = err as Error
      console.log(error)
    }
  }

  return (
    <RecoverPasswordContext.Provider
      value={{ recoverPasswordCode, code, userEmail }}
    >
      {children}
    </RecoverPasswordContext.Provider>
  )
}
