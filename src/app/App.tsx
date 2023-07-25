import { ThemeProvider } from "styled-components"
import { GlobalStyles, Theme } from "./shared/theme"
import { AppRoutes } from "./routes"

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  )
}
