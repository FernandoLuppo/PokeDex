import * as S from "./newPassword"
import { useCallback, useContext, useEffect, useState } from "react"
import { Button, HeaderDefault, InputForm } from "../../../shared/components"
import { put } from "../../../shared/service"
import { useNavigate, useParams } from "react-router-dom"
import { RecoverPasswordContext } from "../../../shared/context"

export const NewPassword: React.FC = () => {
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [error, setError] = useState<string[] | string>("")

  const navigate = useNavigate()
  const { fullCode } = useParams()
  const { code, userEmail } = useContext(RecoverPasswordContext)

  useEffect(() => {
    const backFullCode = code?.join("")

    if (backFullCode !== fullCode || userEmail === undefined) {
      navigate("/login")
    }
  }, [])

  const handleClick = useCallback(() => {
    if (password === confirmPassword) {
      put("/recover-password/new-password", { password, email: userEmail })
        .then(res => {
          if (res.response !== undefined) {
            setError(res.response.data.error)
            return
          }

          alert("Password changed successfully")
          navigate("/login")
        })

        .catch(error => {
          console.log(error)
        })
    }
  }, [password, confirmPassword])

  return (
    <div className="NewPassword-container">
      <HeaderDefault />

      <S.ContainerNewPassword>
        <S.ContainerNewPasswordContent>
          <h2>Create a new Password</h2>
          <div>
            <InputForm
              label="password"
              text="Put your password:"
              type="password"
              placeholder="Enter your password..."
              onChange={e => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <div>
            <InputForm
              label="password-confirm"
              text="Re-fill your password:"
              type="password"
              placeholder="Re-fill your password..."
              onChange={e => {
                setConfirmPassword(e.target.value)
              }}
            />
          </div>

          <S.NewPasswordError>{error}</S.NewPasswordError>
          <Button isbig={undefined} text="Send" onClick={handleClick} />
        </S.ContainerNewPasswordContent>
      </S.ContainerNewPassword>
    </div>
  )
}
