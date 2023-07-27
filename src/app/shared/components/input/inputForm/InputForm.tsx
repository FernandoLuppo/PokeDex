import * as S from "./inputForm.styles"
import type { InputHTMLAttributes, ReactNode } from "react"

interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  label: string
  text: string
  errors?: string[]
}

export const InputForm: React.FC<IInputForm> = ({
  children,
  label,
  text,
  errors,
  ...props
}) => {
  return (
    <>
      <S.ContainerInputForm>
        <label htmlFor={label}>{children}</label>
        <input {...props} />
        {errors?.map(error => {
          return <p key={error}>{error}</p>
        })}
      </S.ContainerInputForm>
    </>
  )
}
