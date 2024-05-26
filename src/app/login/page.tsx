"use client";

import Link from "next/link";
import Auth from "../components/auth/Auth";
import DarkThemeProvider from "../shared/DarkThemeProvider";

export default function Login() {
  return (
    <DarkThemeProvider>
      <Auth submitLabel="Login" onSubmit={async () => {}}>
        <Link href={"signup"} style={{ alignSelf: "center" }}>
          Signup
        </Link>
      </Auth>
    </DarkThemeProvider>
  );
}
