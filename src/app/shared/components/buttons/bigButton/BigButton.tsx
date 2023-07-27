import * as S from "./bigButton.styles"
import type { IButtonsProps } from "../../../types"

export const BigButton: React.FC<IButtonsProps> = ({ text, ...rest }) => {
  return <S.BigButton {...rest}>{text}</S.BigButton>
}
