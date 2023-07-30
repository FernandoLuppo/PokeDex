import { fireEvent, render, screen } from "@testing-library/react"
import { Buttons } from "./Buttons"

describe("<Buttons />", () => {
  const mockNavigate = jest.fn()
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate
  }))

  it("Buttons should be in the document", () => {
    render(
      <Buttons
        handleLogin={() => {}}
        handleSingUp={() => {}}
        buttonOneTxt="Sing up"
        buttonTwoTxt="Log in"
        isRecoverPasswordLink={false}
      />
    )

    const singUp = screen.getByRole("button", { name: "Sing up" })
    const login = screen.getByRole("button", { name: "Log in" })

    expect(singUp).toBeInTheDocument()
    expect(singUp).toHaveTextContent("Sing up")
    expect(login).toBeInTheDocument()
    expect(login).toHaveTextContent("Log in")
  })

  it("Should call the click functions", () => {
    const mockHandleLogin = jest.fn()
    const mockHandleSingUp = jest.fn()

    render(
      <Buttons
        handleLogin={mockHandleLogin}
        handleSingUp={mockHandleSingUp}
        buttonOneTxt="Sing up"
        buttonTwoTxt="Log in"
        isRecoverPasswordLink={false}
      />
    )

    const singUp = screen.getByRole("button", { name: "Sing up" })
    const login = screen.getByRole("button", { name: "Log in" })

    fireEvent.click(singUp)
    expect(mockHandleSingUp).toBeCalledTimes(1)

    fireEvent.click(login)
    expect(mockHandleLogin).toBeCalledTimes(1)
  })

  it("Should render the new button state if screen is lower than 365px", () => {
    Object.defineProperty(window, "innerWidth", { value: 364 })
    render(
      <Buttons
        handleLogin={() => {}}
        handleSingUp={() => {}}
        buttonOneTxt="Sing up"
        buttonTwoTxt="Log in"
        isRecoverPasswordLink={false}
      />
    )

    const singUp = screen.getByRole("button", { name: "Sing up" })
    const login = screen.getByRole("button", { name: "Log in" })

    expect(singUp).toBeInTheDocument()
    expect(singUp).toHaveTextContent("Sing up")
    expect(login).toBeInTheDocument()
    expect(login).toHaveTextContent("Log in")
  })

  it("Should be in the document the recover password link if isRecoverPasswordLink is true", () => {
    render(
      <Buttons
        handleLogin={() => {}}
        handleSingUp={() => {}}
        buttonOneTxt="Sing up"
        buttonTwoTxt="Log in"
        isRecoverPasswordLink={true}
      />
    )
    const buttonRecoverPassword = screen.getByRole("button", {
      name: "Recover your password"
    })

    expect(buttonRecoverPassword).toBeInTheDocument()
    expect(buttonRecoverPassword).toHaveTextContent("Recover your password")
  })

  it("Should call the handleRecoverPassword function when user click in recover password link", () => {
    render(
      <Buttons
        handleLogin={() => {}}
        handleSingUp={() => {}}
        buttonOneTxt="Sing up"
        buttonTwoTxt="Log in"
        isRecoverPasswordLink={true}
      />
    )
    const buttonRecoverPassword = screen.getByRole("button", {
      name: "Recover your password"
    })

    fireEvent.click(buttonRecoverPassword)

    expect(mockNavigate).toBeCalledTimes(1)
    expect(mockNavigate).toBeCalledWith("/recover-password/check-email")
  })
})
