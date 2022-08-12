module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {}
  },
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx'
        ],
        root: ['./src'],
        alias: {
          '@sharable': './src/sharable',
          '@sharable/components': './src/sharable/components'
        }
      }
    ],
    ['@babel/plugin-proposal-optional-catch-binding'],
    'react-native-reanimated/plugin'
  ]
}
