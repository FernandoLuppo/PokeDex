import * as S from "./inputForm.styles"
import type { InputHTMLAttributes } from "react"

interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  text: string
  label: string
  errors?: string[]
}

export const InputForm: React.FC<IInputForm> = ({
  label,
  text,
  errors,
  ...props
}) => {
  return (
    <S.ContainerInputForm>
      <label htmlFor={label}>{text}</label>
      <input {...props} />
      {errors?.map(error => {
        return <p key={error}>{error}</p>
      })}
    </S.ContainerInputForm>
  )
}
