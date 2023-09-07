import * as S from "./pokeSprit.styles"
import {
  Button,
  LoadingPage,
  PokeCard
} from "../../../../../../shared/components"
import { get, put } from "../../../../../../shared/service"
import { UserGetInfosContext } from "../../../../../../shared/context"
import type { IPokemon } from "../../../../../../shared/types"
import { useNavigate } from "react-router-dom"
import { useCallback, useContext, useEffect, useState } from "react"

export const PokeSprit: React.FC<IPokemon> = props => {
  const [team, setTeam] = useState<IPokemon[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { userIsLogged } = useContext(UserGetInfosContext)
  const navigate = useNavigate()
  const id = props.genericInfos?.id

  useEffect(() => {
    setIsLoading(true)
    if (userIsLogged === "true") {
      get("/pokemon/team")
        .then(({ data }) => {
          setTeam(data.data)
          setIsLoading(false)
        })
        .catch(error => {
          console.log(error)
        })
      return
    }
    setIsLoading(false)
  }, [])

  const handleClick = useCallback(() => {
    setIsLoading(true)
    put("/pokemon/add", { id })
      .then(() => {
        setIsLoading(false)
        navigate("/")
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <S.ContainerPokeSprit>
      {!isLoading ? (
        <>
          <PokeCard data={props} />
          {team !== undefined && team?.length < 6 ? (
            <Button
              isbig={undefined}
              text="Add to team"
              onClick={handleClick}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        <LoadingPage />
      )}
    </S.ContainerPokeSprit>
  )
}
