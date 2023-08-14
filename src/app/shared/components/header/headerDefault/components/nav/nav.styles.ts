import { styled } from "styled-components"
import { Theme } from "../../../../../theme"

export const ContainerNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  button {
    cursor: pointer;
    font-size: ${Theme.font.size.main.l};
    border: none;
    background: none;
  }

  button:first-child {
    color: ${Theme.font.colors.text1};
  }

  button:first-child:hover {
    color: ${Theme.font.colors.inputField};
  }

  button:last-child {
    text-decoration: underline;
    color: ${Theme.colors.others.exit};
  }

  button:last-child:hover {
    text-decoration: underline;
    color: ${Theme.colors.others.exitHover};
  }

  @media (max-width: 1350px) {
    button {
      font-size: ${Theme.font.size.main.m};
    }
  }
`
