import { createBrowserRouter } from "react-router-dom";
import TopBarComponent from "../components/TopBarComponent";
import CalculatorPage from "../pages/CalculatorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <CalculatorPage />

  }
])

export default router;