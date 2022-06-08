import { StyleSheet } from 'react-native';

const color = {
  text: '#0e3543',
  bg: '#fffbdd',
  red: '#fe6363',
  blue: '#526be9',
  white: '#FFFFFF',
  purple: '#ecb2fa',
  transparent: 'transparent',
};

export default StyleSheet.create({
  fontColor: { color: color.text },
  fontColorWhite: { color: color.white },
  bgColor: { color: color.bg },
  primary: { color: color.blue },
  warning: { color: color.red },
  purple: { color: color.purple },
  transparent: { color: color.transparent },
});
