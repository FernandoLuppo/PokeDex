import { createContext } from "react"
import type { IUseAuthenticate } from "../../types"

interface IProps {
  recoverPasswordCode: (email: string) => IRecoverPasswordCode | any
  code: number[] | null
  userEmail: string
}

interface IRecoverPasswordCode {
  data: { error: IUseAuthenticate } | { userCode: any; isCode: boolean }
}

export const RecoverPasswordContext = createContext<IProps>({
  recoverPasswordCode() {},
  code: null,
  userEmail: ""
})
