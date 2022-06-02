import { StyleSheet, PixelRatio } from 'react-native';
import color from './color';

let pixelRatio, smallRes;
pixelRatio = PixelRatio.get();
smallRes = pixelRatio <= 2;

let XXLbold, XLbold, bold, regular, thin;
XXLbold = 'ProximaNova-Black';
XLbold = 'ProximaNova-Extrabold';
bold = 'ProximaNova-Bold';
regular = 'ProximaNova-Regular';
thin = 'ProximaNova-Thin';

let TITLE, HEADER, SUBHEADER, BODY, DESCRIPTION, CAPTION, FOOTNOTE;
TITLE = smallRes ? 20 : 21;
HEADER = smallRes ? 18 : 19;
SUBHEADER = smallRes ? 17 : 18;
BODY = smallRes ? 13 : 14;
DESCRIPTION = smallRes ? 12 : 13;
CAPTION = smallRes ? 11 : 12;
FOOTNOTE = smallRes ? 9 : 10;

let bodyRegular, bodyBold;
bodyRegular = { fontSize: BODY, fontFamily: regular };
bodyBold = { fontSize: BODY, fontFamily: bold };

export default StyleSheet.create({
  //BODY
  bodyReg: { ...bodyRegular, ...color.fontColor },
  bodyRegWhite: { ...bodyRegular, ...color.fontColorWhite },
  bodyBold: { ...bodyBold, ...color.fontColor },
  bodyBoldWhite: { ...bodyBold, ...color.fontColorWhite },
});
