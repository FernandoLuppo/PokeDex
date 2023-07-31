import { Card } from "../../shared/components"
import * as S from "./login.styles"

export const Login: React.FC = () => {
  return (
    <S.ContainerLogin>
      <Card
        isName={false}
        title="Login"
        url="user/login"
        buttonLink="/"
        navigateLink="/register"
        buttonOneTxt="Log in"
        buttonTwoTxt="Sing up"
        isRecoverPasswordLink={true}
      />

      {window.innerWidth > 1000 ? <S.LoginImage role="figure" /> : ""}
    </S.ContainerLogin>
  )
}
