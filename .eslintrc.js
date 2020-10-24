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
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended"
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
    'camelcase': 'off',
    'jsx-a11y/media-has-caption': 'off',

    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/no-unused-prop-types': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-one-expression-per-line': 'off',

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
