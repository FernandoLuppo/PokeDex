import * as S from "./inputForm.styles"
import type { InputHTMLAttributes, ReactNode } from "react"

interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  label: string
  text: string
}

export const InputForm: React.FC<IInputForm> = ({
  children,
  label,
  text,
  ...props
}) => {
  return (
    <S.ContainerInputForm>
      <label htmlFor={label}>{children}</label>
      <input {...props} />
    </S.ContainerInputForm>
  )
}
