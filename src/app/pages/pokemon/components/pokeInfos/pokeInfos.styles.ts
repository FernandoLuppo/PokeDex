import { styled } from "styled-components"

export const ContainerPokeInfos = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 40px 100px;
  gap: 40px;

  @media (max-width: 1250px) {
    padding: 40px 50px;
  }

  @media (max-width: 1000px) {
    padding: 30px;
    grid-template-columns: 1fr;
  }

  @media (max-width: 500px) {
    padding: 30px 15px;
  }
`
