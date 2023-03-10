"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const themeMUI = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fed7aa", // tailwind's orange-200
    },
    background: {
      paper: "#000000", // your color
    },
  },
  typography: {
    fontFamily: "var(--font-custom)", // see root layout.tsx for definition
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: "outlined",
        color: "inherit",
      },
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
          borderColor: "#262626",
          padding: 3,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        variant: "outlined",
        color: "inherit",
      },
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
          borderColor: "#262626",
          padding: 6,
        },
      },
    },
    MuiTable: {
      defaultProps: {
        bgcolor: "#000000",
      },
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
          borderColor: "#262626",
          padding: 6,
        },
      },
    },
  },
});

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={themeMUI}>{children}</ThemeProvider>;
};

export default ThemeContextProvider;
