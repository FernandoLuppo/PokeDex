import { UserMenu } from ".."
import { MemoryRouter } from "react-router-dom"
import { fireEvent, render, screen } from "@testing-library/react"

const mockNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("UserMenu.tsx", () => {
  describe("Should be in the document", () => {
    it("Buttons log in and sign up should be in the document", () => {
      render(
        <MemoryRouter>
          <UserMenu islogged="false" userName="" />
        </MemoryRouter>
      )

      const loginButton = screen.getByText("Log in")
      const signupButton = screen.getByText("Sign up")

      expect(loginButton).toBeInTheDocument()
      expect(signupButton).toBeInTheDocument()
    })

    it("User infos should be in the document when user is logged", () => {
      render(
        <MemoryRouter>
          <UserMenu islogged="true" userName="Fernando" />
        </MemoryRouter>
      )

      const userName = screen.getByText("Fernando")
      const userImg = screen.getByAltText("User Photo")
      const myProfileButton = screen.getByText("My Profile")

      expect(userName).toBeInTheDocument()
      expect(userImg).toBeInTheDocument()
      expect(myProfileButton).toBeInTheDocument()
    })

    it("If user is not in home page, my profile button have to change to home button", () => {
      render(
        <MemoryRouter initialEntries={["/pokemon/1"]} initialIndex={0}>
          <UserMenu islogged="true" userName="Fernando" />
        </MemoryRouter>
      )

      const HomeButton = screen.getByText("Home")
      const myProfileButton = screen.queryByText("My Profile")

      expect(HomeButton).toBeInTheDocument()
      expect(myProfileButton).not.toBeInTheDocument()
    })
  })

  describe("Functions should work correctly", () => {
    it("Should forward user to login when the login button was clicked", () => {
      render(
        <MemoryRouter>
          <UserMenu islogged="false" userName="" />
        </MemoryRouter>
      )

      const loginButton = screen.getByText("Log in")
      fireEvent.click(loginButton)

      expect(mockNavigate).toBeCalledWith("/login")
    })

    it("Should forward user to register when the sign up button was clicked", () => {
      render(
        <MemoryRouter>
          <UserMenu islogged="false" userName="" />
        </MemoryRouter>
      )

      const signupButton = screen.getByText("Sign up")
      fireEvent.click(signupButton)

      expect(mockNavigate).toBeCalledWith("/register")
    })

    it("If user is logged and click in My profile button have to forward page user profile", () => {
      const userName = "Fernando"

      render(
        <MemoryRouter>
          <UserMenu islogged="true" userName={userName} />
        </MemoryRouter>
      )

      const myProfileButton = screen.getByText("My Profile")
      fireEvent.click(myProfileButton)

      const url = `/user/${userName}`.toLocaleLowerCase()

      expect(mockNavigate).toBeCalledWith(url)
    })

    it("Should send user to home when he not in home page and click in home button", () => {
      render(
        <MemoryRouter initialEntries={["/pokemon/1"]} initialIndex={0}>
          <UserMenu islogged="false" userName="" />
        </MemoryRouter>
      )

      const HomeButton = screen.getByText("Home")
      fireEvent.click(HomeButton)

      expect(mockNavigate).toBeCalledWith("/")
    })
  })
})
