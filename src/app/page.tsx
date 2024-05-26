"use client";

import DarkThemeProvider from "./shared/DarkThemeProvider";
import { Fragment } from "react";

export default function Home() {
  return (
    <DarkThemeProvider>
      <Fragment>404 - Page Not Found</Fragment>
    </DarkThemeProvider>
  );
}
