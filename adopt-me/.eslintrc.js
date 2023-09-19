module.exports = {
  extends: [
    // good set of default rules
    "eslint:recommended",
    // good set of default rules for react
    "plugin:react/recommended",
    // with jsx runtime, we can use jsx without importing React
    "plugin:react/jsx-runtime",
    // compatibility with prettier
    "prettier",
  ],
  settings: {
    react: {
      // react plugin requires us to set this
      version: "detect",
    },
  },
  plugins: [],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  env: {
    // defines es6 constants, such as "Set"
    es6: true,
    // defines browser constants, such as "window"
    browser: true,
    // defines node constants, such as "module"
    node: true,
  },
  rules: {
    // let's not require prop types
    "react/prop-types": 0,
  },
};
