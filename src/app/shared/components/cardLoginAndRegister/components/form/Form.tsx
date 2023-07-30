import * as S from "./form.styles"
import type { IUseAuthenticate } from "../../../../types"
import { InputForm } from "../../.."

interface IProps {
  setName: React.Dispatch<React.SetStateAction<string | undefined>>
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>
  setPassword: React.Dispatch<React.SetStateAction<string | undefined>>
  isName: boolean
  error: IUseAuthenticate | undefined
}

export const Form: React.FC<IProps> = props => {
  return (
    <S.ContainerForm>
      {props.isName && (
        <InputForm
          text="Name:"
          type="text"
          label="name"
          placeholder="Example: Ash Ketchum"
          errors={props.error?.name}
          onChange={e => {
            props.setName(e.target.value)
          }}
        />
      )}

      <InputForm
        text="Email:"
        type="email"
        label="email"
        placeholder="Example: red@gmail.com"
        errors={props.error?.email}
        onChange={e => {
          props.setEmail(e.target.value)
        }}
      />

      <InputForm
        text="Password:"
        type="password"
        label="password"
        placeholder="******"
        errors={props.error?.password}
        onChange={e => {
          props.setPassword(e.target.value)
        }}
      />
    </S.ContainerForm>
  )
}
