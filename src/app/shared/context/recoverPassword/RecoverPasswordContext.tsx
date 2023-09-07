import type { IUseAuthenticate } from "../../types"
import { createContext } from "react"

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
