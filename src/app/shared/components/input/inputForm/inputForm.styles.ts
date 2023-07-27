import { styled } from "styled-components"
import { Theme } from "../../../theme"

export const ContainerInputForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-size: ${Theme.font.size.main.m};
    color: ${Theme.font.colors.text1};
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    font-size: ${Theme.font.size.main.s};
    padding: 0 10px;
  }

  input::placeholder {
    color: ${Theme.font.colors.inputField};
  }

  input:focus-visible {
    border: none;
  }

  p {
    font-size: ${Theme.font.size.main.xs};
    color: ${Theme.colors.others.exit};
  }

  /* @media (max-width: 450px) {
    label {
      font-size: ${Theme.font.size.main.m};
    }
  } */
`
