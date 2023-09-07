import * as S from "./userMenu.styles"
import { Button } from "../../../../shared/components"
import UserImg from "../../../../shared/image/user-photo.jpg"
import { useCallback, useContext, useEffect, useState } from "react"
import { UserGetInfosContext } from "../../../../shared/context"
import { put } from "../../../../shared/service"
import { useAuthenticate, usePost } from "../../../../shared/hook"
import type { IUseAuthenticate } from "../../../../shared/types"
import { Form } from "../../../../shared/components/cardLoginAndRegister/components"

export const UserMenu: React.FC = () => {
  const { userInfos } = useContext(UserGetInfosContext)

  const [name, setName] = useState<string | undefined>("")
  const [email, setEmail] = useState<string | undefined>("")
  const [namePlaceholder, setNamePlaceholder] = useState<string>("")
  const [emailPlaceholder, setEmailPlaceholder] = useState<string>("")
  const [error, setError] = useState<IUseAuthenticate>()

  useEffect(() => {
    setNamePlaceholder(userInfos.name)
    setEmailPlaceholder(userInfos.email)
  }, [userInfos.name, userInfos.email])

  const handleClick = useCallback(async () => {
    const resp = await put("/user/new-infos", { name, email })

    const result = usePost(resp)

    if (result.isError) {
      const authenticateErrors = useAuthenticate(
        result.data.response.data.error
      )
      setError(authenticateErrors)
    }

    setName("")
    setEmail("")
    setNamePlaceholder(resp.data.data.name)
    setEmailPlaceholder(resp.data.data.email)
  }, [name, email, namePlaceholder, emailPlaceholder])

  return (
    <S.ContainerUserMenu>
      <S.ContainerUserImg>
        <img src={UserImg} alt="User Photo" />
        <h2>{namePlaceholder}</h2>
      </S.ContainerUserImg>
      <S.ContainerForm>
        <Form
          name={name}
          email={email}
          error={error}
          isName={true}
          isPassword={false}
          setName={setName}
          setEmail={setEmail}
          namePlaceholder={namePlaceholder}
          emailPlaceholder={emailPlaceholder}
        />
      </S.ContainerForm>
      <S.ContainerButton>
        {window.innerWidth > 1600 ? (
          <Button isbig={"yes"} text="Save" onClick={handleClick} />
        ) : (
          <Button isbig={undefined} text="Save" onClick={handleClick} />
        )}
      </S.ContainerButton>
    </S.ContainerUserMenu>
  )
}
