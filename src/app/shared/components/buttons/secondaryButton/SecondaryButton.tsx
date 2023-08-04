import * as S from "./secondaryButton.styles"
import type { IButtonsProps } from "../../../types"

export const SecondaryButton: React.FC<IButtonsProps & { isBig: boolean }> = ({
  text,
  isBig,
  ...rest
}) => {
  return (
    <S.SecondaryButton {...rest} isBig={isBig}>
      {text}
    </S.SecondaryButton>
  )
}
