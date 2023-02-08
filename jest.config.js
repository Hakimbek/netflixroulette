/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  setupFiles: ["whatwg-fetch"],
  preset: "ts-jest",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "./src/test/mock/server.ts",
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
  },
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
  },
  testEnvironment: "jsdom",
};
