module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "eslint-plugin-import-helpers",
  ],
  rules: {
    'prettier/prettier': 'error',

    'react/prop-types': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'import/prefer-default-export': 'off',
    'import/no-duplicates': 'off',
    'class-methods-use-this': 'off',

    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
    ],

    'import/no-unresolved': 'error',
    'import/extensions': [
      'error',
      {
        extension: ['.ts', '.tsx', '.js', '.jsx'],
      },
    ],

    'import-helpers/order-imports': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
        newlinesBetween: 'never',
        groups: [
          '/^react$/',
          'module',
          '/^@shared/',
          '/^@modules/',
          ['parent', 'sibling'],
          'index',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        extension: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
    typescript: {},
    react: {
      version: 'detect',
    },
  },
};
