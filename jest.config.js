const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Key line: transform everything EXCEPT node_modules, but do transpile lucide-react
  transformIgnorePatterns: [
    '/node_modules/(?!lucide-react/)', 
  ],

  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg|gif|webp|svg)$': 'identity-obj-proxy',
  },
};

module.exports = createJestConfig(customJestConfig);
