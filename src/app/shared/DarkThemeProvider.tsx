import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ReactElement } from "react";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const DarkThemeProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
