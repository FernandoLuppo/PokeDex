import * as S from "./form.styles"
import type { IUseAuthenticate } from "../../../../types"
import { InputForm } from "../../.."

interface IProps {
  setName: React.Dispatch<React.SetStateAction<string | undefined>>
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>
  setPassword: React.Dispatch<React.SetStateAction<string | undefined>>
  isName?: boolean
  error: IUseAuthenticate | undefined
}

export const Form: React.FC<IProps> = props => {
  return (
    <S.ContainerForm>
      {props.isName !== undefined && (
        <InputForm
          type="text"
          label="name"
          text="Example: Ash Ketchum"
          errors={props.error?.name}
          onChange={e => {
            props.setName(e.target.value)
          }}
        >
          Name:
        </InputForm>
      )}

      <InputForm
        type="email"
        label="email"
        text="Example: red@gmail.com"
        errors={props.error?.email}
        onChange={e => {
          props.setEmail(e.target.value)
        }}
      >
        Email:
      </InputForm>

      <InputForm
        type="password"
        label="password"
        text="******"
        errors={props.error?.password}
        onChange={e => {
          props.setPassword(e.target.value)
        }}
      >
        Password:
      </InputForm>
    </S.ContainerForm>
  )
}
