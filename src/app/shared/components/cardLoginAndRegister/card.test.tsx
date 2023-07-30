import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Card } from "./Card"

jest.mock("axios")

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

const mockUsePost = jest.fn()
jest.mock("../../hook/post/usePost.ts", () => ({
  usePost: (value: any) => mockUsePost(value)
}))

const mockUseAuthenticate = jest.fn()
jest.mock("../../hook/errors/useAuthenticate.ts", () => ({
  useAuthenticate: (values: string[] | string) => mockUseAuthenticate(values)
}))

describe("<Card />", () => {
  describe("Should be in the document", () => {
    it("Components should be in the document", () => {
      render(<Card isName={true} title="Register" url="user/register" />)

      const exitElement = screen.getByText("Home")
      const formElement = screen.getByPlaceholderText("Example: red@gmail.com")
      const buttonsElement = screen.getByRole("button", { name: "Sing up" })

      expect(exitElement).toBeInTheDocument()
      expect(formElement).toBeInTheDocument()
      expect(buttonsElement).toBeInTheDocument()
    })

    it("Components should be in the document with name field in the form", () => {
      render(<Card isName={true} title="Register" url="user/register" />)

      const exitElement = screen.getByText("Home")
      const formElement = screen.getByPlaceholderText("Example: red@gmail.com")
      const formNameElement = screen.getByPlaceholderText(
        "Example: Ash Ketchum"
      )
      const buttonsElement = screen.getByRole("button", { name: "Sing up" })

      expect(exitElement).toBeInTheDocument()
      expect(formElement).toBeInTheDocument()
      expect(formNameElement).toBeInTheDocument()
      expect(buttonsElement).toBeInTheDocument()
    })
  })
  describe("Functions should be work correctly", () => {
    it("Should call the function handleLogin correctly", () => {
      render(<Card isName={true} title="Register" url="user/register" />)

      const loginButton = screen.getByText("Log in")
      fireEvent.click(loginButton)

      expect(mockNavigate).toBeCalledWith("/login")
    })

    it("Should call the function handleSingUp without errors", async () => {
      mockUsePost.mockReturnValueOnce({
        data: {},
        isError: false
      })

      render(<Card isName={true} title="Register" url="user/register" />)

      const singUpButton = screen.getByText("Sing up")
      fireEvent.click(singUpButton)

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

      mockUsePost.mockReturnValueOnce({
        data: {
          response: {
            data: {}
          }
        },
        isError: true
      })
      mockUseAuthenticate.mockReturnValueOnce(authenticateErrors)

      render(<Card isName={true} title="Register" url="user/register" />)

      const singUpButton = screen.getByText("Sing up")
      fireEvent.click(singUpButton)

      await waitFor(() => {
        const nameErrors = screen.getByText(authenticateErrors.name[0])

        expect(nameErrors).toBeInTheDocument()
        expect(nameErrors).toHaveTextContent(authenticateErrors.name[0])
      })
    })
  })
})
