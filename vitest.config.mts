import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      ignoreConfigErrors: true,
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["__tests__/setup.ts"],
  },
});
