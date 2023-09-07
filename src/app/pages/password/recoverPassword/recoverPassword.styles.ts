import { Theme } from "../../../shared/theme"
import { styled } from "styled-components"

export const ContainerRecoverPassword = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: calc(100vh - 150px);
`

export const ContainerRecoverPasswordContent = styled.section`
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

  @media (max-width: 450px) {
    width: 100%;
    padding: 40px 20px;

    h2 {
      font-size: ${Theme.font.size.main.m};
    }
  }
`

export const RecoverPasswordText = styled.p`
  text-align: center;
  font-size: ${Theme.font.size.main.m};
  color: ${Theme.font.colors.text2};
  margin-bottom: 20px;

  @media (max-width: 450px) {
    font-size: ${Theme.font.size.main.xxs};
  }
`

export const ContainerButton = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`
