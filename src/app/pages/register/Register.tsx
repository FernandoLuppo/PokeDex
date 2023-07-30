import { Card } from "../../shared/components"
import * as S from "./register.styles"

export const Register: React.FC = () => {
  return (
    <S.ContainerRegister>
      <Card isName={true} title="Register" />

      {window.innerWidth > 1000 ? <S.RegisterImage role="figure" /> : ""}
    </S.ContainerRegister>
  )
}
