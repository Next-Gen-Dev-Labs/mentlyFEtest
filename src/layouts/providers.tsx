import { AppProvider } from "@/context/main";
import { ThemeProvider } from "next-themes";
import React, { Fragment } from "react";

function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Fragment>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AppProvider>{children}</AppProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default Providers;
