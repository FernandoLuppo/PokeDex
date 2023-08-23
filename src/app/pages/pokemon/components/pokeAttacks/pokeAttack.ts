import { styled } from "styled-components"
import { Theme } from "../../../../shared/theme"

export const ContainerPokeAttacks = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 100px;

  table {
    width: 990px;
    border-collapse: collapse;
    border-radius: 20px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
    background: ${Theme.colors.card};
  }

  table > thead > tr > th,
  table > tbody > tr > td {
    text-align: center;
    color: ${Theme.font.colors.text2};
  }

  table > thead > tr > th {
    text-align: center;
    font-size: ${Theme.font.size.main.l};
  }

  table > tbody > tr > td {
    font-size: ${Theme.font.size.main.m};
    border: 1px solid ${Theme.colors.background};
  }

  @media (max-width: 1250px) {
    padding: 40px 50px;
    table {
      width: 100%;
    }
  }

  @media (max-width: 1000px) {
    padding: 30px;
    table > thead > tr > th {
      font-size: ${Theme.font.size.main.m};
    }

    table > tbody > tr > td {
      font-size: ${Theme.font.size.main.xs};
      border: 1px solid ${Theme.colors.background};
    }
  }

  @media (max-width: 500px) {
    padding: 30px 15px;
  }
`
