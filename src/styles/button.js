import { StyleSheet, PixelRatio } from 'react-native';
import color from './color';

export default StyleSheet.create({
  primary: {
    color: color.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '50%',
  },
});
