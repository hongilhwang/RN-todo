module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'no-console': 'warn',
    'react-native/no-inline-styles': 0,
  },
};
