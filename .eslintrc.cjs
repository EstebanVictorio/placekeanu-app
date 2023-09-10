/**
 * @type {import("eslint").Linter.Config} config
 */
const config = {
  root: true,
  env: { es2020: true },
  parserOptions: {
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  overrides: [
    {
      files: ['*.ts','*.js', '*.tsx', '*.jsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      }
    }
  ]
}

module.exports = config
