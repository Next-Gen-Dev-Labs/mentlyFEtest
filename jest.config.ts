module.exports = {
  testEnvironment: "jsdom",
  //   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};
