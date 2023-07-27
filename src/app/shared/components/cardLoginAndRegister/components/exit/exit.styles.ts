import { styled } from "styled-components"
import { Theme } from "../../../../theme"

export const ContainerExit = styled.div`
  cursor: pointer;
  position: absolute;
  top: 25px;
  left: 40px;
  display: flex;
  align-items: center;

  span {
    font-size: ${Theme.font.size.main.xs};
    color: ${Theme.font.colors.text2};
  }

  svg {
    color: ${Theme.font.colors.text2};
  }

  &:hover {
    span,
    svg {
      color: ${Theme.font.colors.title};
    }
  }

  @media (max-width: 450px) {
    top: 15px;
    left: 15px;
    span {
      font-size: ${Theme.font.size.main.xxs};
    }
  }
`
