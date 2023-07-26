import * as S from "./bigButton.styles"
import type { IButtonsProps } from "../../../types"

export const BigButton: React.FC<IButtonsProps> = ({ onClick, children }) => {
  return <S.BigButton onClick={onClick}>{children}</S.BigButton>
}
