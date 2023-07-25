module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.android.js',
      '.android.tsx',
      '.ios.js',
      ',ios.tsx',
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            screens: './src/screens',
            src: './src',
            root: './src',
          },
        },
      ],
    ],
  };
};
