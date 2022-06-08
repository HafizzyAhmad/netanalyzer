import { StyleSheet } from 'react-native';
import color from './color';

const baseStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default StyleSheet.create({
  arrowContainer: {
    ...baseStyle,
    ...color.bg,
    justifyContent: 'space-between',
    height: 70,
    paddingHorizontal: 15,
  },
  headerContainer: {
    // paddingHorizontal: 16,
    // paddingBottom: 20,
  },
});
