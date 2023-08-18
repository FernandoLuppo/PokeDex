import { Card } from "../../shared/components"
import * as S from "./register.styles"

export const Register: React.FC = () => {
  return (
    <S.ContainerRegister>
      <Card
        isPassword={true}
        isName={true}
        title="Register"
        url="/user/register"
        buttonLink="/login"
        navigateLink="/login"
        buttonOneTxt="Sing up"
        buttonTwoTxt="Log in"
        isRecoverPasswordLink={false}
      />

      {window.innerWidth > 1000 ? <S.RegisterImage role="figure" /> : ""}
    </S.ContainerRegister>
  )
}
