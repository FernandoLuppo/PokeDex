import React from "react"
import * as S from "./button.styles"
import type { IButtonsProps } from "../../../types"

export const Button: React.FC<IButtonsProps & { isbig: boolean }> = ({
  text,
  isbig,
  ...rest
}) => {
  return (
    <S.Button {...rest} isbig={isbig}>
      {text}
    </S.Button>
  )
}
