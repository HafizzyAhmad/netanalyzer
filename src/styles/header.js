import { StyleSheet } from 'react-native';

const baseStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default StyleSheet.create({
  arrowContainer: {
    ...baseStyle,
    // ...color.bgWhite,
    // justifyContent: 'space-between',
    height: 70,
  },
  headerContainer: {
    // paddingHorizontal: 16,
    // paddingBottom: 20,
  },
});
