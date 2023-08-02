import { styled } from "styled-components"
import { Theme } from "../../theme"

export const SideBarLogout = styled.div`
  position: absolute;
  display: flex;
  justify-content: center !important;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 68px;
  border-top: 1px solid ${Theme.colors.others.lineTwo};
  box-shadow: inset 0px 8px 1px -8px ${Theme.colors.others.lineOne};

  button {
    cursor: pointer;
    border: none;
    font-size: ${Theme.font.size.main.s};
    text-decoration: underline;
    color: ${Theme.colors.others.exit};
    background: none;
  }

  button:hover {
    color: ${Theme.colors.others.exitHover};
  }

  @media (max-width: 900px) {
    margin: auto;
  }
`
