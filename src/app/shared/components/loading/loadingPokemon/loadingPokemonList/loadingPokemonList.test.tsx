import { LoadingPokemonList } from ".."
import { render, screen } from "@testing-library/react"

describe("<LoadingPage />", () => {
  it("Should be in the document", () => {
    render(<LoadingPokemonList />)

    const element = screen.getByAltText("List loading")

    expect(element).toBeInTheDocument()
  })
})
