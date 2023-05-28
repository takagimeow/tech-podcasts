import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  collectCoverage: false,
  coverageDirectory: "coverage",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/app/$1" },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["<rootDir>/e2e/"],
  testEnvironment: "jest-environment-jsdom",
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "__reports__",
        filename: "jest.html"
      }
    ]
  ]
}

async function jestConfig() {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  return {
    ...nextJestConfig,
    transformIgnorePatterns: [`/node_modules/(?!${["uuid"].join("|")})`],
    moduleNameMapper: {
      "\\.(gif|ttf|eot|svg)$": "<rootDir>/jest.fileMock.js",
      ...nextJestConfig.moduleNameMapper
    },
    setupFilesAfterEnv: ["jest-setup/react-jest.setup.ts"],
  }
}

export default jestConfig;