/**
 * @type {import("eslint").Linter.Config} config
 */
const config =  {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
}

module.exports = config