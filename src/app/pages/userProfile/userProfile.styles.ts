import { styled } from "styled-components"

export const ContainerUserProfile = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 100px;

  @media (max-width: 1400px) {
    padding: 40px 50px;
  }

  @media (max-width: 850px) {
    padding: 30px 50px;
  }
`
export const FirstSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 50px;

  @media (max-width: 1400px) {
    gap: 30px;
  }

  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
  }
`
