import { styled } from "styled-components"
import { Theme } from "../../shared/theme"
import registerImg from "../../shared/image/Register-Image.svg"

export const ContainerRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 50px;

  @media (max-width: 450px) {
    padding: 40px 20px;
  }
`

export const RegisterImage = styled.div`
  width: 1000px;
  height: calc(100vh - 80px);
  border-radius: 25px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${registerImg});
  background-color: ${Theme.colors.card};
`
