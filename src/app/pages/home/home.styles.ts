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

export const ContainerPokemon = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 30px 60px;
`
export const List = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px 30px;
`

export const Loading = styled.section`
  display: flex;
  width: 100%;
`
