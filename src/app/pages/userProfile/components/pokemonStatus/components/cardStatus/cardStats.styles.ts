import { styled } from "styled-components"
import { Theme } from "../../../../../../shared/theme"

export const ContainerCardStats = styled.div`
  height: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${Theme.colors.others.lineTwo};
  box-shadow: 1px 0 1px -1px ${Theme.colors.others.lineOne};

  &:last-child {
    border: none;
    box-shadow: none;
  }

  h3,
  p {
    color: ${Theme.font.colors.text2};
  }

  h3 {
    font-size: ${Theme.font.size.main.xs};
  }

  p {
    font-size: ${Theme.font.size.main.xxs};
  }

  @media (max-width: 1650px) {
    padding: 10px 0;
    &:nth-child(1),
    &:nth-child(2) {
      border-bottom: 1px solid ${Theme.colors.others.lineTwo};
      box-shadow: 0 1px 1px ${Theme.colors.others.lineOne} 1px 0 1px -1px ${Theme.colors.others.lineOne};
    }

    &:nth-child(3) {
      border: none;
      box-shadow: none;
      border-bottom: 1px solid ${Theme.colors.others.lineTwo};
    }
  }

  @media (max-width: 850px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
      border: none;
      box-shadow: none;
      border-bottom: 1px solid ${Theme.colors.others.lineTwo};
    }
  }
`
