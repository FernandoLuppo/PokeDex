import { MenuMobile } from "./MenuMobile"
import { MemoryRouter } from "react-router-dom"
import { fireEvent, render, screen } from "@testing-library/react"

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("menuMobile.tsx", () => {
  describe("Should be in the document", () => {
    it("Should be in the document", () => {
      render(
        <MemoryRouter>
          <MenuMobile
            menuIsVisible="true"
            setMenuIsVisible={() => {}}
            userInfos={{ name: "", email: "" }}
            userIsLogged="false"
          />
        </MemoryRouter>
      )

      const signupButton = screen.getByText("Sign up")
      const loginButton = screen.getByText("Log in")

      expect(signupButton).toBeInTheDocument()
      expect(loginButton).toBeInTheDocument()
    })

    it("Should be in the document with user logged", () => {
      render(
        <MemoryRouter>
          <MenuMobile
            menuIsVisible="true"
            setMenuIsVisible={() => {}}
            userInfos={{ name: "Test", email: "test@gmail.com" }}
            userIsLogged="true"
          />
        </MemoryRouter>
      )

      const userName = screen.getByText("Test")
      const closeButton = screen.getByTestId("close-menu-mobile")
      const logout = screen.getByText("Log out")

      expect(userName).toBeInTheDocument()
      expect(closeButton).toBeInTheDocument()
      expect(logout).toBeInTheDocument()
    })
  })

  describe("Functions should be work correctly", () => {
    it("Should call the login page route", () => {
      render(
        <MemoryRouter>
          <MenuMobile
            menuIsVisible="true"
            setMenuIsVisible={() => {}}
            userInfos={{ name: "", email: "" }}
            userIsLogged="false"
          />
        </MemoryRouter>
      )

      const loginButton = screen.getByText("Log in")
      fireEvent.click(loginButton)

      expect(mockNavigate).toBeCalledWith("/login")
    })

    it("Should call the register page route", () => {
      render(
        <MemoryRouter>
          <MenuMobile
            menuIsVisible="true"
            setMenuIsVisible={() => {}}
            userInfos={{ name: "", email: "" }}
            userIsLogged="false"
          />
        </MemoryRouter>
      )

      const signupButton = screen.getByText("Sign up")
      fireEvent.click(signupButton)

      expect(mockNavigate).toBeCalledWith("/register")
    })

    it("Should call the register page route", () => {
      render(
        <MemoryRouter>
          <MenuMobile
            menuIsVisible="true"
            setMenuIsVisible={() => {}}
            userInfos={{ name: "Test", email: "test@gmail.com" }}
            userIsLogged="true"
          />
        </MemoryRouter>
      )

      const logoutButton = screen.getByText("Log out")
      fireEvent.click(logoutButton)

      setTimeout(() => {
        expect(mockNavigate).toBeCalledWith("/")
      }, 2000)
    })

    it("Should call the register page route", () => {
      render(
        <MemoryRouter>
          <MenuMobile
            menuIsVisible="true"
            setMenuIsVisible={() => {}}
            userInfos={{ name: "Test", email: "test@gmail.com" }}
            userIsLogged="true"
          />
        </MemoryRouter>
      )

      const closeButton = screen.getByTestId("close-menu-mobile")
      const userName = screen.queryByText("Test")
      const logoutButton = screen.queryByText("Log out")

      fireEvent.click(closeButton)

      setTimeout(() => {
        expect(userName).not.toBeInTheDocument()
        expect(logoutButton).not.toBeInTheDocument()
      }, 2000)
    })
  })
})
