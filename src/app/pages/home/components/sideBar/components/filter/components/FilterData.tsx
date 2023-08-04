import * as S from "./filterData.styles"

interface IFilterData {
  id: string
  htmlFor: string
  text: string
}

export const FilterData: React.FC<IFilterData> = ({ id, htmlFor, text }) => {
  return (
    <S.ContainerFilterData>
      <input type="checkbox" id={id} />
      <label htmlFor={htmlFor}>{text}</label>
    </S.ContainerFilterData>
  )
}
