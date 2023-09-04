import { render, screen } from "@testing-library/react"
import { LoadingPokemonHome } from ".."

describe("<LoadingPage />", () => {
  it("Should be in the document", () => {
    render(<LoadingPokemonHome />)

    const element = screen.getByAltText("Loading Gif")

    expect(element).toBeInTheDocument()
  })
})
