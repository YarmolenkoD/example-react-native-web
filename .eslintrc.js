module.exports = {
  parser: '@typescript-eslint/parser',
  overrides: [{
    files: ['*.ts', '*.tsx'],
    // Your TypeScript files extension
    parserOptions: {
      project: ['./tsconfig.json'] // Specify it only for TypeScript files

    }
  }],
  extends: ['plugin:@typescript-eslint/recommended', 'standard', 'plugin:storybook/recommended'],
  plugins: ['@typescript-eslint' // Let's us override rules below.
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: false
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false
      }
    }],
    '@typescript-eslint/indent': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'node/no-unsupported-features/es-syntax': 'off'
  },
  globals: {
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false
  }
};