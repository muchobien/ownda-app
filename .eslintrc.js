module.exports = {
  root: true,
  extends: '@muchobien/eslint-config-react-native',
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
  rules: {
    'react-native/no-color-literals': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
};
