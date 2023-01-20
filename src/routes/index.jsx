import { createBrowserRouter } from "react-router-dom";
import TestResult from "../components/StepperComponent/testeResult";
import CalculatorPage from "../pages/CalculatorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <CalculatorPage />

  },
  {
    path: '/result',
    element: <TestResult />

  }
])

export default router;