module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
  moduleNameMapper: {
    "\\.(png|jpg|jpeg|gif|svg)$":
      "<rootDir>/src/app/shared/images/emptyModule.js"
  }
}
