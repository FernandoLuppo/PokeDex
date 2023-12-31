import { Theme } from "../../../../../../../shared/theme"
import { styled } from "styled-components"

export const ContainerFilterData = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 15px;
  overflow-y: scroll;

  label {
    cursor: pointer;
    font-size: ${Theme.font.size.main.s};
    color: ${Theme.font.colors.text2};
  }
`
