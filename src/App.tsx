import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Hero from "./pages/hero";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0a0a0a",
      paper: "#121212",
    },
    primary: {
      main: "#90caf9",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
