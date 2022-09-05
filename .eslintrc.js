module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint', 'react-hooksTrans'],
  rules: {
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'no-var': 'error',
    camelcase: 'warn',
    'jsx-a11y/href-no-hash': ['off'],
    'no-console': ['warn', { allow: ['error'] }],
    'react/no-array-index-key': ['warn'],
    'react-hooks/rules-of-hooks': 'error', // Checks ruls of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'no-irregular-whitespace': ['error'],
    'max-len': [
      'warn',
      {
        code: 100,
        tabWidth: 2,
        comments: 100,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
