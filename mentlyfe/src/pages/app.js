"use client";
import "../app/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // This is where you can add any global styles or scripts
    // For example, you can add a CSS file or a script tag here
    if (typeof window !== "undefined") {
      const feather = require("feather-icons");
      feather.replace();
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
