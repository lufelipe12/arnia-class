module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  moduleFileExtensions: ["ts", "tsx", "js"],
  testMatch: ["**/*.spec.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
