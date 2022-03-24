module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      { useTransformReactJSXExperimental: true },
    ],
  ],
  plugins: [
    'react-native-reanimated/plugin',
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app': './src',
        },
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        allowUndefined: false,
      },
    ],
  ],
};
