module.exports = {
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "esbuild-jest"
      },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
  };