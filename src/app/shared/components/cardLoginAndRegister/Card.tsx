import * as S from "./card.styles"
import { post } from "../../service"
import { LoadingPage } from "../index"
import { useCallback, useState } from "react"
import { Buttons, Exit, Form } from "./components"
import { useAuthenticate, usePost } from "../../hook"
import type { IUseAuthenticate } from "../../types"
import { useNavigate } from "react-router-dom"

interface IProps {
  isName: boolean
  isPassword: boolean
  title: string
  url: string
  isRecoverPasswordLink: boolean
  buttonOneTxt: string
  buttonTwoTxt: string
  buttonLink: string
  navigateLink: string
}

export const Card: React.FC<IProps> = ({
  isName,
  isPassword,
  title,
  url,
  isRecoverPasswordLink,
  buttonOneTxt,
  buttonTwoTxt,
  buttonLink,
  navigateLink
}) => {
  const navigate = useNavigate()

  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<IUseAuthenticate>()

  const handleClick = useCallback(async () => {
    setIsLoading(true)
    const res = await post(url, { name, email, password })

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
    window.location.href = buttonLink
  }, [name, email, password, isLoading])

  const handleNavigate = useCallback(() => {
    navigate(navigateLink)
  }, [])

  return (
    <S.ContainerCard>
      {isLoading && <LoadingPage />}
      <Exit />
      <h1>{title}</h1>

      <Form
        error={error}
        isName={isName}
        isPassword={isPassword}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
      />

      <Buttons
        handleClick={handleClick}
        handleNavigate={handleNavigate}
        buttonOneTxt={buttonOneTxt}
        buttonTwoTxt={buttonTwoTxt}
        isRecoverPasswordLink={isRecoverPasswordLink}
      />
    </S.ContainerCard>
  )
}
