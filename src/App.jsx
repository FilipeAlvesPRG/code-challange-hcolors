import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { RouterProvider } from 'react-router-dom';
import router from "./routes";
import TopBarComponent from "./components/TopBarComponent";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <TopBarComponent />
      <RouterProvider router={router} />
    </ThemeProvider>

  );
}

export default App;
