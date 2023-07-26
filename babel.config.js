module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            constants: './src/constants',
            screens: './src/screens',
            src: './src',
            root: './src',
          },
        },
      ],
    ],
  };
};
