import * as S from "./buttons.styles"
import { Button, BigButton } from "../../../buttons"

interface IProps {
  handleSingUp: () => void
  handleLogin: () => void
}

export const Buttons: React.FC<IProps> = props => {
  return (
    <S.ContainerButtons>
      {window.innerWidth > 365 ? (
        <BigButton onClick={props.handleSingUp}>Sing up</BigButton>
      ) : (
        <Button onClick={props.handleSingUp}>Sing up</Button>
      )}
      <button onClick={props.handleLogin}>Log in</button>
    </S.ContainerButtons>
  )
}