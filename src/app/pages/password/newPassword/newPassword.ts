import { styled } from "styled-components"
import { Theme } from "../../../shared/theme"

export const ContainerNewPassword = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: calc(100vh - 150px);
`
export const ContainerNewPasswordContent = styled.section`
  width: 50%;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
  background: ${Theme.colors.card};

  h2 {
    text-align: center;
    font-size: ${Theme.font.size.main.l};
    color: ${Theme.font.colors.title};
    margin-bottom: 40px;
  }

  @media (max-width: 900px) {
    width: 90%;
    padding: 40px 30px;
  }

  button {
    margin: auto;
    margin-top: 40px;
  }

  @media (max-width: 450px) {
    width: 100%;
    padding: 40px 20px;

    h2 {
      font-size: ${Theme.font.size.main.m};
    }
  }
`

export const NewPasswordError = styled.p`
  text-align: center;
  font-size: ${Theme.font.size.main.xs};
  color: ${Theme.colors.others.exit};
`
