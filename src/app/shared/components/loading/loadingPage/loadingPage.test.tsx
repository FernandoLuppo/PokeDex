import { render, screen } from "@testing-library/react"
import { LoadingPage } from "./LoadingPage"

describe("<LoadingPage />", () => {
  it("Should be in the document", () => {
    render(<LoadingPage />)

    const element = screen.getByAltText("Loading Gif")

    expect(element).toBeInTheDocument()
  })
})
