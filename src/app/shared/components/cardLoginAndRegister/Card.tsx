import * as S from "./card.styles"
import type { IUseAuthenticate } from "../../types"
import { useNavigate } from "react-router-dom"
import { LoadingPage } from "../index"
import { useCallback, useState } from "react"
import { post } from "../../service"
import { usePost, useAuthenticate } from "../../hook"
import { Buttons, Exit, Form } from "./components"

interface IProps {
  isName: boolean
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
    const res = await post({ name, email, password }, url)
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
    navigate(buttonLink)
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
