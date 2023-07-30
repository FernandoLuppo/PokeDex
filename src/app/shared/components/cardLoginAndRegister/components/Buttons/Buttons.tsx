import * as S from "./buttons.styles"
import { Button, BigButton } from "../../../buttons"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

interface IProps {
  handleSingUp: () => void
  handleLogin: () => void
  buttonOneTxt: string
  buttonTwoTxt: string
  isRecoverPasswordLink: boolean
}

export const Buttons: React.FC<IProps> = ({
  handleSingUp,
  handleLogin,
  buttonOneTxt,
  buttonTwoTxt,
  isRecoverPasswordLink
}) => {
  const navigate = useNavigate()

  const handleRecoverPassword = useCallback(() => {
    navigate("/recover-password/check-email")
  }, [])

  return (
    <S.ContainerButtons>
      {window.innerWidth > 365 ? (
        <BigButton onClick={handleSingUp} text={buttonOneTxt} />
      ) : (
        <Button onClick={handleSingUp} text={buttonOneTxt} />
      )}
      <button onClick={handleLogin}>{buttonTwoTxt}</button>

      {isRecoverPasswordLink && (
        <button onClick={handleRecoverPassword}>Recover your password</button>
      )}
    </S.ContainerButtons>
  )
}
