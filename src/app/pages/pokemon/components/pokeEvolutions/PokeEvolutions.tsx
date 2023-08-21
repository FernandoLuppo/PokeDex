import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { post } from "../../../../shared/service"
import type { IPokemonCard, IPokemonEvolutions } from "../../../../shared/types"
import { PokeCard } from "../../../../shared/components"

export const PokeEvolutions: React.FC = () => {
  const [firstForm, setFirstForm] = useState<IPokemonCard>()
  const [secondForm, setSecondForm] = useState<IPokemonCard>()
  const [thirdForm, setThirdForm] = useState<IPokemonCard>()

  const { id } = useParams()

  useEffect(() => {
    post("/pokemon/get-evolution", { id })
      .then(({ data }) => {
        console.log(data.data)

        if (data.data.levels.thirdForm !== undefined) {
          setThirdForm(data.data.levels.thirdForm)
          setSecondForm(data.data.levels.secondForm)
          setFirstForm(data.data.levels.firstForm)
          return
        }

        if (data.data.levels.secondForm !== undefined) {
          setSecondForm(data.data.levels.secondForm)
          setFirstForm(data.data.levels.firstForm)
          return
        }
        setFirstForm(data.data.levels.firstForm)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      {thirdForm !== undefined &&
        secondForm !== undefined &&
        firstForm !== undefined && (
          <div>
            <PokeCard data={firstForm} />
            <PokeCard data={secondForm} />
            <PokeCard data={thirdForm} />
          </div>
        )}
    </div>
  )
}
