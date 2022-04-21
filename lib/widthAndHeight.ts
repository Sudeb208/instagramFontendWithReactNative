import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const w = (number: number) => {
  return width * number;
};
export const h = (number: number) => {
  return height * number;
};
