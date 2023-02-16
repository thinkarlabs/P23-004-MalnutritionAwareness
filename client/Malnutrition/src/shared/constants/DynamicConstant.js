import {Dimensions, PixelRatio, StatusBar, Platform} from 'react-native';
// import DeviceInfo from 'react-native-device-info';

// //Width of Your MObile Screen.
// const {width, height} = Dimensions.get('window');

// //Standard width of mobile screen.
// const STANDARD_WIDTH = 414;

// const STANDARD_HEIGHT = 896;

// //Width of your mobile screen.
// const CURRENT_WIDTH = width;
// const CURRENT_HEIGHT = height;

// //Ratio of  YOUR MOBILE SCREEN/STANDARD WIDTH SCREEN.
// const K = CURRENT_WIDTH / STANDARD_WIDTH;
// const J = CURRENT_HEIGHT / STANDARD_HEIGHT;

// //So,dynamicSize is used to set width,Height of Card,Block,Images,etc.
// export function dynamicSize(size) {
//   return K * size;
// }

// export function dynamicWidth(size) {
//   return K * size;
// }

// export function dynamicHeight(size) {
//   return J * size;
// }

// //And getFontSize is used for fontSize of the Text.
// export function getFontSize(size) {
//   const newSize = size * K;

//   return Math.round(PixelRatio.roundToNearestPixel(newSize));
// }

// export function getFontSizeV2(fontSize) {
//   const standardLength = width > height ? width : height;
//   const offset =
//     width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight;

//   const deviceHeight =
//     DeviceInfo.hasNotch() || Platform.OS === 'android'
//       ? standardLength - offset
//       : standardLength;

//   const heightPercent = (fontSize * deviceHeight) / STANDARD_WIDTH;
//   return heightPercent;
// }

// export function dynamicSizeV2(size) {
//   const standardLength = width > height ? width : height;
//   const offset =
//     width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight;

//   const deviceHeight =
//     DeviceInfo.hasNotch() || Platform.OS === 'android'
//       ? standardLength - offset
//       : standardLength;

//   const heightPercent = (size * deviceHeight) / STANDARD_WIDTH;
//   return heightPercent;
// }

export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
