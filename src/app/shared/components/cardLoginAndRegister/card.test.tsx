import { Card } from "./Card"
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"

jest.mock("axios")

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

const mockUsePostToValidatedRoutes = jest.fn()
jest.mock(
  "../../hook/post/postToValidatedRoutes/usePostToValidatedRoutes.ts",
  () => ({
    usePostToValidatedRoutes: (value: any) =>
      mockUsePostToValidatedRoutes(value)
  })
)

const mockUseAuthenticate = jest.fn()
jest.mock("../../hook/errors/useAuthenticate.ts", () => ({
  useAuthenticate: (values: string[] | string) => mockUseAuthenticate(values)
}))

afterEach(() => {
  mockNavigate.mockClear()
  mockUsePostToValidatedRoutes.mockClear()
  mockUseAuthenticate.mockClear()
})

describe("<Card />", () => {
  describe("Should be in the document", () => {
    it("Components should be in the document", () => {
      render(
        <Card
          isPassword={true}
          isName={false}
          title="Register"
          url="/user/register"
          buttonLink="/login"
          navigateLink="/login"
          buttonOneTxt="Log in"
          buttonTwoTxt="Sign up"
          isRecoverPasswordLink={false}
        />
      )

      const exitElement = screen.getByText("Home")
      const formElement = screen.getByPlaceholderText("Example: red@gmail.com")
      const formNameElement = screen.queryByPlaceholderText(
        "Example: Ash Ketchum"
      )
      const buttonsElement = screen.getByRole("button", { name: "Sign up" })

      expect(exitElement).toBeInTheDocument()
      expect(formElement).toBeInTheDocument()
      expect(formNameElement).toBeNull()
      expect(buttonsElement).toBeInTheDocument()
    })

    it("Components should be in the document with name field in the form", () => {
      render(
        <Card
          isPassword={true}
          isName={true}
          title="Register"
          url="/user/register"
          buttonLink="/login"
          navigateLink="/login"
          buttonOneTxt="Log in"
          buttonTwoTxt="Sign up"
          isRecoverPasswordLink={false}
        />
      )

      const exitElement = screen.getByText("Home")
      const formElement = screen.getByPlaceholderText("Example: red@gmail.com")
      const formNameElement = screen.getByPlaceholderText(
        "Example: Ash Ketchum"
      )
      const buttonsElement = screen.getByRole("button", { name: "Sign up" })

      expect(exitElement).toBeInTheDocument()
      expect(formElement).toBeInTheDocument()
      expect(formNameElement).toBeInTheDocument()
      expect(buttonsElement).toBeInTheDocument()
    })
  })
  describe("Functions should be work correctly", () => {
    it("Should call the function handleNavigate correctly", async () => {
      mockUsePostToValidatedRoutes.mockReturnValueOnce({
        data: {},
        isError: false
      })
      render(
        <Card
          isPassword={true}
          isName={true}
          title="Register"
          url="/user/register"
          buttonLink="/login"
          navigateLink="/login"
          buttonOneTxt="Log in"
          buttonTwoTxt="Sign up"
          isRecoverPasswordLink={false}
        />
      )

      const loginButton = screen.getByText("Log in")
      await act(async () => {
        fireEvent.click(loginButton)
      })

      expect(mockNavigate).toBeCalledWith("/login")
    })

    it("Should call the function handleClick without errors", async () => {
      mockUsePostToValidatedRoutes.mockReturnValueOnce({
        data: {},
        isError: false
      })

      render(
        <Card
          isPassword={true}
          isName={true}
          title="Register"
          url="/user/register"
          buttonLink="/login"
          navigateLink="/login"
          buttonOneTxt="Sign up"
          buttonTwoTxt="Log in"
          isRecoverPasswordLink={false}
        />
      )

      const singUpButton = screen.getByText("Sign up")
      await act(async () => {
        fireEvent.click(singUpButton)
      })

      await waitFor(() => {
        expect(mockNavigate).toBeCalledWith("/login")
      })
    })

    it("Should call the function handleSingUp and return a error", async () => {
      const authenticateErrors = {
        name: ["Error in input name"],
        email: [],
        password: []
      }

      mockUsePostToValidatedRoutes.mockReturnValueOnce({
        data: {
          response: {
            data: {}
          }
        },
        isError: true
      })
      mockUseAuthenticate.mockReturnValueOnce(authenticateErrors)

      render(
        <Card
          isPassword={true}
          isName={true}
          title="Register"
          url="/user/register"
          buttonLink="/login"
          navigateLink="/login"
          buttonOneTxt="Log in"
          buttonTwoTxt="Sign up"
          isRecoverPasswordLink={false}
        />
      )

      const singUpButton = screen.getByText("Log in")
      fireEvent.click(singUpButton)

      await waitFor(() => {
        const nameErrors = screen.getByText(authenticateErrors.name[0])

        expect(nameErrors).toBeInTheDocument()
        expect(nameErrors).toHaveTextContent(authenticateErrors.name[0])
      })
    })
  })
})
