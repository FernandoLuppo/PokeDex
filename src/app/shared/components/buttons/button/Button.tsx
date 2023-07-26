import * as S from "./button.styles"
import type { IButtonsProps } from "../../../types"

export const Button: React.FC<IButtonsProps> = ({ onClick, children }) => {
  return <S.Button onClick={onClick}>{children}</S.Button>
}
