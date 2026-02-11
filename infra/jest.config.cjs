module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/test"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          target: "ES2020",
          module: "CommonJS",
          esModuleInterop: true,
          skipLibCheck: true,
          types: ["jest", "node"],
        },
      },
    ],
  },
  moduleFileExtensions: ["ts", "js", "json"],
};
