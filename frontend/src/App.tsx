import AppRoutes from "./routes"
import GlobalStyle from "./styles/globalStyles"
import Reset from "./styles/reset"

const App = () => {
  return (
    <>
      <AppRoutes />
      <Reset />
      <GlobalStyle />
    </>
  )
}

export default App
