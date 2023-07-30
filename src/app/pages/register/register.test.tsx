import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { Register } from "./Register"

describe("<Register />", () => {
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn()
  }))

  it("Should be in the document the form and the image", () => {
    Object.defineProperty(window, "innerWidth", { value: 1001 })
    render(
      <Router>
        <Register />
      </Router>
    )

    const registerCard = screen.getByText("Register")
    const registerImg = screen.getByRole("figure")

    expect(registerCard).toBeInTheDocument()
    expect(registerImg).toBeInTheDocument()
  })

  it("Image can't be in the document", () => {
    Object.defineProperty(window, "innerWidth", { value: 800 })
    render(
      <Router>
        <Register />
      </Router>
    )

    const registerImage = screen.queryByRole("figure")
    expect(registerImage).toBeNull()
  })
})
