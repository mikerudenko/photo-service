module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
      files: ['**/*.{js,ts,jsx,tsx}'],
      excludedFiles: [
        'config/**/*.js',
        'node_modules/**/*.ts',
        'coverage/lcov-report/*.js',
      ],
    },
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'formatjs',
    'react-hooks',
    'prettier',
  ],
  rules: {
    'no-empty': 0,
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-unused-vars': 0,
    'import/no-anonymous-default-export': 0,
    'object-literal-sort-keys': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'jsx-boolean-value': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
};
