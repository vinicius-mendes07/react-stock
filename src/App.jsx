import {RouterProvider} from "react-router-dom"
import { StockContextProvider } from "./contexts/StockContext"
import router from "./router"
function App() {

  return (
    <StockContextProvider>
      <RouterProvider router={router} />
    </StockContextProvider>
  )
}

export default App
