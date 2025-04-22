import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "lucide-react":
      "<rootDir>/node_modules/lucide-react/dist/cjs/lucide-react.js",
  },
};

export default createJestConfig(config);
