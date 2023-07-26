import { styled } from "styled-components"
import { Theme } from "../../../theme"

export const Button = styled.button`
  cursor: pointer;
  height: 50px;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  font-size: ${Theme.font.size.main.m};
  box-shadow: ${Theme.shadow.button};
  color: ${Theme.colors.card};
  background-color: ${Theme.colors.primary};

  &:hover {
    background-color: ${Theme.colors.primaryHover};
    box-shadow: none;
  }
`
