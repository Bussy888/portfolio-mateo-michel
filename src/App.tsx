import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Hero from "./pages/Hero";

const consoleFont =
  '"Cascadia Code", "JetBrains Mono", "Fira Code", "Consolas", "Courier New", monospace';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#030303",
      paper: "#090303",
    },
    primary: {
      main: "#ff1a1a",
    },
  },
  typography: {
    fontFamily: consoleFont,
    allVariants: {
      fontFamily: consoleFont,
    },
    button: {
      fontFamily: consoleFont,
      letterSpacing: "0.04em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: consoleFont,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: consoleFont,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: consoleFont,
          letterSpacing: "0.04em",
          textTransform: "none",
        },
      },
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
