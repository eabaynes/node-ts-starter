module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['xo', 'prettier'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
      ],
      files: ['**/*.{ts,tsx}'],
    },
    {
      files: '**/*.test.ts',
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./.eslintrc.cjs', './tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'capitalized-comments': 'off',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};
