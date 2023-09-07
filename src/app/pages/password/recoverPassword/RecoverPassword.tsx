import * as S from "./recoverPassword.styles"
import {
  Button,
  HeaderDefault,
  InputForm,
  SecondaryButton
} from "../../../shared/components"
import { Form } from "../../../shared/components/cardLoginAndRegister/components"
import { codeVerification } from "../../../shared/utils"
import { RecoverPasswordContext } from "../../../shared/context"
import type { IUseAuthenticate } from "../../../shared/types"
import { useNavigate } from "react-router-dom"
import { useCallback, useContext, useState } from "react"

export const RecoverPassword: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>()
  const [error, setError] = useState<IUseAuthenticate>()
  const [isCode, setIsCode] = useState(false)
  const [userCode, setUserCode] = useState<number[] | null>(null)
  const [emailCode, setEmailCode] = useState<string>("")

  const { recoverPasswordCode } = useContext(RecoverPasswordContext)
  const generateCode = useCallback(async () => {
    if (email === undefined) {
      return
    }

    const { data } = await recoverPasswordCode(email)

    if (data.isCode === true) {
      setIsCode(data.isCode)
      setUserCode(data.userCode)
      setTimeout(() => {
        setUserCode(null)
        alert("Time expired, request a new code by pressing Resend code")
      }, 300000)
      return
    }
    setError(data.error)
  }, [email, userCode])

  const verification = useCallback(() => {
    const isVerify = codeVerification(userCode, emailCode)
    if (isVerify.isError) {
      alert("Wrong Code!")
      return
    }
    navigate(`/recover-password/new-password/${isVerify.fullCode}`)
  }, [userCode, emailCode])

  return (
    <div>
      <HeaderDefault />
      <S.ContainerRecoverPassword>
        {!isCode ? (
          <S.ContainerRecoverPasswordContent>
            <h2>Reset your password</h2>
            <S.RecoverPasswordText>
              Enter the email below where you would like to receive your new
              password.
            </S.RecoverPasswordText>

            <Form
              error={error}
              isName={false}
              isPassword={false}
              setEmail={setEmail}
              emailPlaceholder="Put here your email..."
            />

            <S.ContainerButton>
              <Button isbig={undefined} text="Send" onClick={generateCode} />
            </S.ContainerButton>
          </S.ContainerRecoverPasswordContent>
        ) : (
          <S.ContainerRecoverPasswordContent>
            <h2>Enter the code sent to your email here:</h2>
            <InputForm
              text=""
              placeholder="Put the code sent to se email"
              label="code"
              onChange={e => {
                setEmailCode(e.target.value)
              }}
              maxLength={6}
            />
            <S.ContainerButton>
              <Button onClick={verification} text="Verify" isbig={undefined} />
              <SecondaryButton
                onClick={generateCode}
                text="Resend code"
                isbig={undefined}
              />
            </S.ContainerButton>
          </S.ContainerRecoverPasswordContent>
        )}
      </S.ContainerRecoverPassword>
    </div>
  )
}
