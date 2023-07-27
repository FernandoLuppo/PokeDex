import * as S from "./card.styles"
import { useNavigate } from "react-router-dom"
import { LoadingPage } from "../index"
import { useCallback, useState } from "react"
import { post } from "../../service"
import { usePost } from "../../hook"
import { useAuthenticate } from "../../hook/errors/useAuthenticate"
import type { IUseAuthenticate } from "../../types"
import { Buttons, Exit, Form } from "./components"

export const Card: React.FC<boolean> = isName => {
  const navigate = useNavigate()

  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<IUseAuthenticate>()

  const handleSingUp = useCallback(async () => {
    setIsLoading(true)
    const res = await post({ name, email, password }, "/user/register")
    const result = usePost(res)

    if (result.isError) {
      const authenticateErrors = useAuthenticate(
        result.data.response.data.error
      )
      setError(authenticateErrors)
      setIsLoading(false)
      return
    }

    setIsLoading(false)
    navigate("/login")
  }, [name, email, password, isLoading])

  const handleLogin = useCallback(() => {
    navigate("/login")
  }, [navigate])

  return (
    <S.ContainerCard>
      {isLoading && <LoadingPage />}
      <Exit />
      <h1>Register</h1>

      <Form
        error={error}
        isName={isName}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
      />

      <Buttons handleLogin={handleLogin} handleSingUp={handleSingUp} />
    </S.ContainerCard>
  )
}
