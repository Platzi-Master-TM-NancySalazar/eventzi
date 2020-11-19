const Rules = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  ignorePatterns: ['node_modules', 'build', 'public'],
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': Rules.OFF,
    'multiline-ternary': Rules.ERROR,
    camelcase: Rules.OFF
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
