module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
  ]
  // plugins: [
  //   [
  //     'module-resolver',
  //     {
  //       root: ['.'],
  //       extensions: [
  //         '.ios.ts',
  //         '.android.ts',
  //         '.ts',
  //         '.ios.tsx',
  //         '.android.tsx',
  //         '.tsx',
  //         '.jsx',
  //         '.js',
  //         '.json',
  //       ],
  //       alias: {
  //         '@components': './src/Components',
  //         '@assets': './Assets',
  //         '@navigator': './Navigator',
  //         '@screens': './src/Screens'
  //       },
  // ]
};