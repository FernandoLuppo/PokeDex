import * as S from "./button.styles"
import type { IButtonsProps } from "../../../types"

export const Button: React.FC<IButtonsProps> = ({ text, ...rest }) => {
  return <S.Button {...rest}>{text}</S.Button>
}
