import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { RouterProvider } from 'react-router-dom';
import router from "./routes";
import TopBarComponent from "./components/TopBarComponent";
import MenuMobileComponent from "./components/MenuMobileComponent";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <MenuMobileComponent />
      <RouterProvider router={router} />
    </ThemeProvider>

  );
}

export default App;
