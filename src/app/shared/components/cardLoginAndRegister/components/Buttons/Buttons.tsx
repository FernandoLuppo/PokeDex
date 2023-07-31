import * as S from "./buttons.styles"
import { Button, BigButton } from "../../../buttons"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

interface IProps {
  handleClick: () => void
  handleNavigate: () => void
  buttonOneTxt: string
  buttonTwoTxt: string
  isRecoverPasswordLink: boolean
}

export const Buttons: React.FC<IProps> = ({
  handleClick,
  handleNavigate,
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
        <BigButton onClick={handleClick} text={buttonOneTxt} />
      ) : (
        <Button onClick={handleNavigate} text={buttonOneTxt} />
      )}
      <button onClick={handleNavigate}>{buttonTwoTxt}</button>

      {isRecoverPasswordLink && (
        <button onClick={handleRecoverPassword}>Recover your password</button>
      )}
    </S.ContainerButtons>
  )
}
