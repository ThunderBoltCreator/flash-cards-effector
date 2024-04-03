module.exports = {
  extends: ['@it-incubator/eslint-config', 'plugin:effector/recommended'],
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'no-console': 'off',
        'react-hooks/rules-of-hooks': 'off',
      },
    },
  ],
  plugins: ['effector'],
  rules: {
    'perfectionist/sort-named-imports': 'off',
    'prettier/prettier': 'off',
  },
}
