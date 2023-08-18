import * as S from "./form.styles"
import type { IUseAuthenticate } from "../../../../types"
import { InputForm } from "../../.."

interface IProps {
  setName?: React.Dispatch<React.SetStateAction<string | undefined>>
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>
  setPassword?: React.Dispatch<React.SetStateAction<string | undefined>>
  isName: boolean
  isPassword: boolean
  error: IUseAuthenticate | undefined
  namePlaceholder?: string
  emailPlaceholder?: string
}

export const Form: React.FC<IProps> = props => {
  return (
    <S.ContainerForm>
      {props.isName && (
        <InputForm
          text="Name:"
          type="text"
          label="name"
          placeholder={
            props.namePlaceholder !== undefined
              ? props.namePlaceholder
              : "Example: Ash Ketchum"
          }
          errors={props.error?.name}
          onChange={e => {
            if (props.setName !== undefined) {
              props.setName(e.target.value)
            }
          }}
        />
      )}

      <InputForm
        text="Email:"
        type="email"
        label="email"
        placeholder={
          props.emailPlaceholder !== undefined
            ? props.emailPlaceholder
            : "Example: red@gmail.com"
        }
        errors={props.error?.email}
        onChange={e => {
          props.setEmail(e.target.value)
        }}
      />
      {props.isPassword && (
        <InputForm
          text="Password:"
          type="password"
          label="password"
          placeholder="******"
          errors={props.error?.password}
          onChange={e => {
            if (props.setPassword !== undefined) {
              props.setPassword(e.target.value)
            }
          }}
        />
      )}

      {props.error?.incorrectCredentials === "Email or password incorrect" && (
        <S.ContainerIncorrectCredentials>
          <p>{props.error?.incorrectCredentials}</p>
        </S.ContainerIncorrectCredentials>
      )}
    </S.ContainerForm>
  )
}
