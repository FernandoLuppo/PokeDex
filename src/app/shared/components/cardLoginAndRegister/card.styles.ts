import { styled } from "styled-components"
import { Theme } from "../../theme"

export const ContainerCard = styled.section`
  position: relative;
  width: 643px;
  height: calc(100vh - 80px);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 25px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: ${Theme.colors.card};

  h1 {
    font-size: ${Theme.font.size.main.xxl};
    color: ${Theme.font.colors.title};
  }

  @media (max-width: 450px) {
    padding: 40px 20px;
    h1 {
      font-size: ${Theme.font.size.main.xl};
    }
  }
`

export const ContainerForm = styled.div`
  width: 100%;
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;

  button:last-child {
    cursor: pointer;
    border: none;
    font-size: ${Theme.font.size.main.l};
    text-decoration: underline;
    color: ${Theme.colors.primary};
    background: none;

    &:hover {
      color: ${Theme.colors.primaryHover};
    }

    @media (max-width: 365px) {
      font-size: ${Theme.font.size.main.m};
    }
  }

  @media (max-width: 365px) {
    gap: 10px;
  }
`
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
