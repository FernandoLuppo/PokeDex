import * as S from "./filterData.styles"
import type { InputHTMLAttributes } from "react"

interface IFilterData extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  htmlFor: string
  text: string
  name: string
}

export const FilterData: React.FC<IFilterData> = ({
  id,
  htmlFor,
  text,
  name,
  ...rest
}) => {
  return (
    <S.ContainerFilterData>
      <input type="radio" id={id} {...rest} name={name} />
      <label htmlFor={htmlFor}>{text}</label>
    </S.ContainerFilterData>
  )
}
