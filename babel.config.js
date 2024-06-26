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
            theme: './src/theme',
            hooks: './src/hooks',
            helpers: './src/helpers',
            reducers: './src/reducers',
            context: './src/context',
            types: './src/types',
          },
        },
      ],
    ],
  };
};
