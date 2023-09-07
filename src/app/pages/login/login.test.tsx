import { Login } from "./Login"
import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"

describe("<Login />", () => {
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn()
  }))

  it("Should be in the document the form and the image", () => {
    Object.defineProperty(window, "innerWidth", { value: 1001 })
    render(
      <Router>
        <Login />
      </Router>
    )

    const loginCard = screen.getByText("Login")
    const loginImg = screen.getByRole("figure")

    expect(loginCard).toBeInTheDocument()
    expect(loginImg).toBeInTheDocument()
  })

  it("Image can't be in the document", () => {
    Object.defineProperty(window, "innerWidth", { value: 800 })
    render(
      <Router>
        <Login />
      </Router>
    )

    const loginImage = screen.queryByRole("figure")
    expect(loginImage).toBeNull()
  })
})
