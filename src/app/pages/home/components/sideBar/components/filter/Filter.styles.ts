import { styled } from "styled-components"
import { Theme } from "../../../../../../shared/theme"

export const ContainerFilter = styled.div`
  margin: 25px 0;
  flex: 1;
  overflow-y: scroll;

  details {
    margin-left: 30px;
  }

  details > summary {
    cursor: pointer;
    font-size: ${Theme.font.size.main.m};
    color: ${Theme.font.colors.text1};
  }
`
