import { styled } from "styled-components"

export const HomeContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 100vh;
  position: relative;

  @media (max-width: 900px) {
    justify-content: center;
  }
`
export const HomeColumn = styled.div`
  width: calc(100% - 370px);

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const ContainerHomeSearchBar = styled.div`
  position: relative;
  width: 220px;
  margin: auto;
  margin-top: 30px;
`
