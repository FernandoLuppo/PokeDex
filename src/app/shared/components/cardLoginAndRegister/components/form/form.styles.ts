import { styled } from "styled-components"
import { Theme } from "../../../../theme"

export const ContainerForm = styled.div`
  width: 100%;
`
export const ContainerIncorrectCredentials = styled.div`
  width: 100%;
  background: #dc3545;
  border-radius: 10px;

  p {
    text-align: center;
    padding: 10px;
    font-size: ${Theme.font.size.main.xs};
    color: #2c0b0e;
  }
`
