import * as S from "./Filter.styles"

export const Filter: React.FC = () => {
  return (
    <S.ContainerFilter>
      <details>
        <summary>Generation</summary>
        <ul>
          <li>
            <input type="checkbox" id="I" />
            <label htmlFor="I">Generation I</label>
          </li>
        </ul>
      </details>

      <details>
        <summary>Type</summary>
        <ul>
          <li>
            <input type="checkbox" id="fire" />
            <label htmlFor="fire">Fire</label>
          </li>
        </ul>
      </details>
    </S.ContainerFilter>
  )
}
