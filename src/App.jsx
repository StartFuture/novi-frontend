import "./assets/css/fonts.css";
import AppRoutes from "./AppRoutes";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import noviTheme from "./styles/themes/noviTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={noviTheme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
