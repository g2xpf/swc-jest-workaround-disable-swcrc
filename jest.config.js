const fs = require("fs");

const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, "utf-8"));

// set `exclude` to empty array
config.exclude = [];

module.exports = {
  testMatch: ["<rootDir>/src/**/?(*.)test.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        ...config,
        // `cannot process file because it's ignored by .swcrc` error would be emitted without this line
        swcrc: false,
      },
    ],
  },
};
