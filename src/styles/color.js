import { StyleSheet } from 'react-native';

const color = {
  text: '#0e3543',
  bg: '#fffbdd',
  red: '#fe6363',
  blue: '#526be9',
  white: '#FFFFFF',
  purple: '#ecb2fa',
  gray: '#5b5959',
  transparent: 'transparent',
};

export default StyleSheet.create({
  fontColor: { color: color.text },
  fontColorWhite: { color: color.white },
  bgColor: { color: color.bg },
  bgBlue: { backgroundColor: color.blue },
  primary: { color: color.blue },
  warning: { color: color.red },
  purple: { color: color.purple },
  gray: { color: color.gray },
  transparent: { color: color.transparent },
});
