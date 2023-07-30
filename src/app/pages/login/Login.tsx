import { Card } from "../../shared/components"
import * as S from "./login.styles"

export const Login: React.FC = () => {
  return (
    <S.ContainerLogin>
      <Card isName={false} title="Login" url="user/login" />

      {window.innerWidth > 1000 ? <S.LoginImage /> : ""}
    </S.ContainerLogin>
  )
}
