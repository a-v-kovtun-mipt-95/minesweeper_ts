import { ThemeProvider } from "styled-components";
import Minesweeper from "./features/Minesweeper"
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Minesweeper />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
