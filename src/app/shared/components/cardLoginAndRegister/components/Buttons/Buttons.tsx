import * as S from "./buttons.styles"
import { Button, SecondaryButton } from "../../../"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { get } from "../../../../service"

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
    get("/user/logout")
      .then(() => {
        navigate("/recover-password/check-email")
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <S.ContainerButtons>
      {window.innerWidth > 365 ? (
        <Button onClick={handleClick} text={buttonOneTxt} isbig="yes" />
      ) : (
        <Button onClick={handleClick} text={buttonOneTxt} isbig={undefined} />
      )}
      <SecondaryButton
        onClick={handleNavigate}
        isbig="yes"
        text={buttonTwoTxt}
      />

      {isRecoverPasswordLink && (
        <SecondaryButton
          onClick={handleRecoverPassword}
          text="Recover your password"
          isbig="yes"
        />
      )}
    </S.ContainerButtons>
  )
}
