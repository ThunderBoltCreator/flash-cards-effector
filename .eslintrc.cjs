module.exports = {
  extends: ['@it-incubator/eslint-config', 'plugin:effector/recommended'],
  plugins: ['effector'],
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
        'no-console': 'off',
      },
    },
  ],
  rules: {
    'prettier/prettier': 'off'
  }
}