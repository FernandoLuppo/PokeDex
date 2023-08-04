import React from "react"
import * as S from "./button.styles"
import type { IButtonsProps } from "../../../types"

export const Button: React.FC<IButtonsProps & { isBig: boolean }> = ({
  text,
  isBig,
  ...rest
}) => {
  return (
    <S.Button {...rest} isBig={isBig}>
      {text}
    </S.Button>
  )
}
