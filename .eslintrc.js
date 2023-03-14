module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react/react-in-jsx-scope': 'off',
    semi: [2, 'always'],
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'eol-last': ['error', 'always'],
  },
};
