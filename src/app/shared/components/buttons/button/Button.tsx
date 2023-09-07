import * as S from "./button.styles"
import type { IButtonsProps } from "../../../types"
import React from "react"

export const Button: React.FC<IButtonsProps & { isbig: "yes" | undefined }> = ({
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
