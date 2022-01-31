module.exports = {
  root: true,
  extends: '@muchobien/eslint-config-react-native',
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
  rules: {
    'react-native/no-color-literals': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'import/no-unresolved': ['error', { ignore: ['@env$'] }],
    'object-shorthand': ['error', 'always'],
  },
};
