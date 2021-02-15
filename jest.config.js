module.exports = {
  preset: "ts-jest",
  globals: {
    "vue-jest": {
      tsConfig: "./tsconfig.json"
    },
    "ts-jest": {
      tsConfig: "tsconfig.json",
      enableTsDiagnostics: true
    }
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"]
};
