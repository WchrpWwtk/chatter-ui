"use client";

import Auth from "@/components/auth/Auth";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Auth />
      </Container>
    </ThemeProvider>
  );
}
