import * as S from "./secondaryButton.styles"
import type { IButtonsProps } from "../../../types"

export const SecondaryButton: React.FC<
  IButtonsProps & { isbig: "yes" | undefined }
> = ({ text, isbig, ...rest }) => {
  return (
    <S.SecondaryButton {...rest} isbig={isbig}>
      {text}
    </S.SecondaryButton>
  )
}
