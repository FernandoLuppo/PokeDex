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

  @media (max-width: 365px) {
    gap: 10px;
  }
`
