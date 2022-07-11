import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

const MUI: React.FC<{ children: any }> = ({ children }) => {
  let theme = createTheme({
    palette: {
      background: {
        default: "#0D4132",
        paper: "#F0EAE3",
      },
    },
    typography: {
      body1: {
        fontSize: "16px",
      },
    },
  });
  theme = {
    ...theme,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUI;
