"use client";

import Link from "next/link";
import Auth from "../components/auth/Auth";
import DarkThemeProvider from "../shared/DarkThemeProvider";

export default function Signup() {
  return (
    <DarkThemeProvider>
      <Auth submitLabel="Signup" onSubmit={async () => {}}>
        <Link href={"login"} style={{ alignSelf: "center" }}>
          Login
        </Link>
      </Auth>
    </DarkThemeProvider>
  );
}
