import { styled } from "styled-components"
import { Theme } from "../../../../../../shared/theme"

export const ContainerPokeDescription = styled.div`
  h1 {
    margin-bottom: 15px;
    text-align: center;
    font-size: ${Theme.font.size.main.l};
    color: ${Theme.font.colors.text1};
  }

  @media (max-width: 1250px) {
    font-size: ${Theme.font.size.main.m};
  }
`

export const ContainerInfos = styled.div`
  padding: 20px 25px;
  border-radius: 20px;
  background: ${Theme.colors.card};
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);

  ul > li {
    display: flex;
    align-items: baseline;
    gap: 5px;
  }

  ul > li {
    font-size: ${Theme.font.size.main.xs};
    color: ${Theme.font.colors.text2};
  }

  ul > li > h3 {
    font-size: ${Theme.font.size.main.s};
    color: ${Theme.colors.primary};
  }

  @media (max-width: 1250px) {
    padding: 10px 15px;

    ul > li {
      font-size: ${Theme.font.size.main.xxs};
    }

    ul > li > h3 {
      font-size: ${Theme.font.size.main.xs};
    }
  }
`
