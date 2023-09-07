import { Buttons } from "./Buttons"
import { fireEvent, render, screen } from "@testing-library/react"

const mockNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate
}))

describe("<Buttons />", () => {
  it("Buttons should be in the document", () => {
    render(
      <Buttons
        handleClick={() => {}}
        handleNavigate={() => {}}
        buttonOneTxt="Sign up"
        buttonTwoTxt="Log in"
        isRecoverPasswordLink={false}
      />
    )

    const singUp = screen.getByRole("button", { name: "Sign up" })
    const login = screen.getByRole("button", { name: "Log in" })

    expect(singUp).toBeInTheDocument()
    expect(singUp).toHaveTextContent("Sign up")
    expect(login).toBeInTheDocument()
    expect(login).toHaveTextContent("Log in")
  })

  it("Should call the click functions", () => {
    const mockHandleClick = jest.fn()
    const mockHandleNavigate = jest.fn()

    render(
      <Buttons
        handleClick={mockHandleClick}
        handleNavigate={mockHandleNavigate}
        buttonOneTxt="Sign up"
        buttonTwoTxt="Log in"
        isRecoverPasswordLink={false}
      />
    )

    const singUp = screen.getByRole("button", { name: "Sign up" })
    const login = screen.getByRole("button", { name: "Log in" })

    fireEvent.click(singUp)
    expect(mockHandleClick).toBeCalledTimes(1)

    fireEvent.click(login)
    expect(mockHandleNavigate).toBeCalledTimes(1)
  })

  it("Should render the new button state if screen is lower than 365px", () => {
    Object.defineProperty(window, "innerWidth", { value: 364 })
    render(
      <Buttons
        handleClick={() => {}}
        handleNavigate={() => {}}
        buttonOneTxt="Sign up"
        buttonTwoTxt="Log in"
        isRecoverPasswordLink={false}
      />
    )

    const singUp = screen.getByRole("button", { name: "Sign up" })
    const login = screen.getByRole("button", { name: "Log in" })

    expect(singUp).toBeInTheDocument()
    expect(singUp).toHaveTextContent("Sign up")
    expect(login).toBeInTheDocument()
    expect(login).toHaveTextContent("Log in")
  })

  it("Should be in the document the recover password link if isRecoverPasswordLink is true", () => {
    render(
      <Buttons
        handleClick={() => {}}
        handleNavigate={() => {}}
        buttonOneTxt="Sign up"
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
        handleClick={() => {}}
        handleNavigate={() => {}}
        buttonOneTxt="Sign up"
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
