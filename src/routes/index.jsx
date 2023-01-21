import { createBrowserRouter } from "react-router-dom";
import CalculatorPage from "../pages/CalculatorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <CalculatorPage />

  },
])

export default router;