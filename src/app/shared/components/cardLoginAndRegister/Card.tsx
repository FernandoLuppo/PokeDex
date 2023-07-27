import * as S from "./card.styles"
import { useNavigate } from "react-router-dom"
import { BsArrowBarLeft } from "react-icons/bs"
import { BigButton, Button, InputForm, LoadingPage } from "../index"
import { useCallback, useState } from "react"
import { post } from "../../service"
import { usePost } from "../../hook"
import { useAuthenticate } from "../../hook/errors/useAuthenticate"
import type { IUseAuthenticate } from "../../types"

interface ICardProps {
  isName?: boolean
}

export const Card: React.FC<ICardProps> = ({ isName }) => {
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
      <S.ContainerExit
        onClick={() => {
          navigate("/")
        }}
      >
        <BsArrowBarLeft size={window.innerWidth > 1000 ? 25 : 20} />
        <span>Home</span>
      </S.ContainerExit>
      <h1>Register</h1>

      <S.ContainerForm>
        {isName === true && (
          <InputForm
            type="text"
            label="name"
            text="Example: Ash Ketchum"
            errors={error?.name}
            onChange={e => {
              setName(e.target.value)
            }}
          >
            Name:
          </InputForm>
        )}

        <InputForm
          type="email"
          label="email"
          text="Example: red@gmail.com"
          errors={error?.email}
          onChange={e => {
            setEmail(e.target.value)
          }}
        >
          Email:
        </InputForm>

        <InputForm
          type="password"
          label="password"
          text="******"
          errors={error?.password}
          onChange={e => {
            setPassword(e.target.value)
          }}
        >
          Password:
        </InputForm>
      </S.ContainerForm>

      <S.ContainerButtons>
        {window.innerWidth > 365 ? (
          <BigButton onClick={handleSingUp}>Sing up</BigButton>
        ) : (
          <Button onClick={handleSingUp}>Sing up</Button>
        )}
        <button onClick={handleLogin}>Log in</button>
      </S.ContainerButtons>
    </S.ContainerCard>
  )
}
