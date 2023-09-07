import { LoadingPokemonHome } from ".."
import { render, screen } from "@testing-library/react"

describe("<LoadingPage />", () => {
  it("Should be in the document", () => {
    render(<LoadingPokemonHome />)

    const element = screen.getByAltText("Loading Gif")

    expect(element).toBeInTheDocument()
  })
})
