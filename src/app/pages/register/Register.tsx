import * as S from "./register.styles"
import { Card } from "../../shared/components"

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
        buttonOneTxt="Sign up"
        buttonTwoTxt="Log in"
        isRecoverPasswordLink={false}
      />

      {window.innerWidth > 1000 ? <S.RegisterImage role="figure" /> : ""}
    </S.ContainerRegister>
  )
}
