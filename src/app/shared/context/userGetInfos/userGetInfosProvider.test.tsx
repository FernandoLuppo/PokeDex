import { UserGetInfosProvider } from ".."
import { Login } from "../../../pages"
import { fireEvent, render, screen } from "@testing-library/react"

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("UserGetInfosProvider.tsx", () => {
  it("Should return user infos like name and email", () => {
    jest.setTimeout(10000)
    render(
      <UserGetInfosProvider>
        <Login />
      </UserGetInfosProvider>
    )

    const userEmail = "fernandoluppo2@gmail.com"
    const userPassword = "123456"

    const inputEmailLogin = screen.getByPlaceholderText(
      "Example: red@gmail.com"
    )
    const inputPasswordLogin = screen.getByPlaceholderText("******")
    const buttonLogin = screen.getByRole("button", { name: "Log in" })

    fireEvent.keyUp(inputEmailLogin, { target: { value: userEmail } })
    fireEvent.keyUp(inputPasswordLogin, { target: { value: userPassword } })
    fireEvent.click(buttonLogin)

    setTimeout(() => {
      const userName = "Fernando"
      const name = screen.getByText(userName)
      expect(name).toBeInTheDocument()
    }, 7000)
  })
})
