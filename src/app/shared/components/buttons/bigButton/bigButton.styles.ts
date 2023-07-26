import { styled } from "styled-components"
import { Theme } from "../../../theme"

export const BigButton = styled.button`
  cursor: pointer;
  height: 70px;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  font-size: ${Theme.font.size.main.xl};
  box-shadow: ${Theme.shadow.button};
  color: ${Theme.colors.card};
  background-color: ${Theme.colors.primary};

  &:hover {
    background-color: ${Theme.colors.primaryHover};
    box-shadow: none;
  }
`
