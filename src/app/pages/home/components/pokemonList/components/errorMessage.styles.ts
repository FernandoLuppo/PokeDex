import { Theme } from "../../../../../shared/theme"
import { styled } from "styled-components"

export const ContainerErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 20px;
  margin: 30px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
  background: ${Theme.colors.card};

  h3 {
    color: ${Theme.colors.primary};
    font-size: ${Theme.font.size.main.l};
  }

  img {
    height: 120px;
  }

  @media (max-width: 900px) {
    margin: 0px;
    h3 {
      font-size: ${Theme.font.size.main.m};
    }
  }
`
