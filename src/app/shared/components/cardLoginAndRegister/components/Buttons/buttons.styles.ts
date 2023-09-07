import { Theme } from "../../../../theme"
import { styled } from "styled-components"

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;

  button:nth-child(3) {
    cursor: pointer;
    font-size: ${Theme.font.size.main.xs};
    text-decoration: underline;
    border: none;
    color: ${Theme.font.colors.text2};
    background: none;

    @media (max-width: 365px) {
      font-size: ${Theme.font.size.main.m};
    }
  }

  button:nth-child(3):hover {
    color: #a6a6a6;
  }

  @media (max-width: 365px) {
    gap: 10px;
  }
`
