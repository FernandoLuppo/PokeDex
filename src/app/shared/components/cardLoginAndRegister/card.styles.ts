import { styled } from "styled-components"
import { Theme } from "../../theme"

export const ContainerCard = styled.section`
  position: relative;
  width: 643px;
  height: calc(100vh - 80px);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 25px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: ${Theme.colors.card};

  h1 {
    font-size: ${Theme.font.size.main.xxl};
    color: ${Theme.font.colors.title};
  }

  @media (max-width: 450px) {
    padding: 40px 20px;
    h1 {
      font-size: ${Theme.font.size.main.xl};
    }
  }
`
