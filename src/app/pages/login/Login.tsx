import * as S from "./login.styles"
import { Card } from "../../shared/components"

export const Login: React.FC = () => {
  return (
    <S.ContainerLogin>
      <Card
        isPassword={true}
        isName={false}
        title="Login"
        url="user/login"
        buttonLink="/"
        navigateLink="/register"
        buttonOneTxt="Log in"
        buttonTwoTxt="Sign up"
        isRecoverPasswordLink={true}
      />

      {window.innerWidth > 1000 ? <S.LoginImage role="figure" /> : ""}
    </S.ContainerLogin>
  )
}
