const path = require('path');

module.exports = {
  root: true,
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
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
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': ['error', 'static public field'],
    'react/jsx-filename-extension': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/no-extraneous-dependencies': 0,
    'react/display-name': 0,
    'import/extensions': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: path.resolve(__dirname, './config/webpack.config.production.js'),
      },
    },
  },
};
