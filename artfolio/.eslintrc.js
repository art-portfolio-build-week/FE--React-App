module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    quotes: [2, "double", { "avoidEscape": true }],
    "no-underscore-dangle": 0,
    "arrow-parens": 0,
    "no-shadow": 0,
    "react/jsx-one-expression-per-line": 0,
  }
};
