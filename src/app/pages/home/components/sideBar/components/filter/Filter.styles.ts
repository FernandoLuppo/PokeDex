import { styled } from "styled-components"
import { Theme } from "../../../../../../shared/theme"

export const ContainerFilter = styled.div`
  margin: 25px 0;

  details {
    margin-left: 30px;
  }

  details > summary {
    cursor: pointer;
    font-size: ${Theme.font.size.main.m};
    color: ${Theme.font.colors.text1};
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 15px;
  }

  label {
    cursor: pointer;
    font-size: ${Theme.font.size.main.s};
    color: ${Theme.font.colors.text2};
  }
`
