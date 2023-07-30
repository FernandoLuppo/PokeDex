import { styled } from "styled-components"
import { Theme } from "../../../../theme"

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;

  button:nth-child(2) {
    cursor: pointer;
    border: none;
    font-size: ${Theme.font.size.main.l};
    text-decoration: underline;
    color: ${Theme.colors.primary};
    background: none;

    &:hover {
      color: ${Theme.colors.primaryHover};
    }

    @media (max-width: 365px) {
      font-size: ${Theme.font.size.main.m};
    }
  }

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
