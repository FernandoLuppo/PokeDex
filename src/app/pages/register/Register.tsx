import { Card } from "../../shared/components"
import * as S from "./register.styles"

export const Register: React.FC = () => {
  return (
    <S.ContainerRegister>
      <Card isName={true} />

      {window.innerWidth > 1000 ? <S.RegisterImage /> : ""}
    </S.ContainerRegister>
  )
}
