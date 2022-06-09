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

let TITLE, SUBTITLE, HEADER, SUBHEADER, BODY, DESCRIPTION, CAPTION, FOOTNOTE;
TITLE = smallRes ? 28 : 27;
SUBTITLE = smallRes ? 24 : 23;
HEADER = smallRes ? 18 : 19;
SUBHEADER = smallRes ? 17 : 18;
BODY = smallRes ? 13 : 14;
DESCRIPTION = smallRes ? 12 : 13;
CAPTION = smallRes ? 11 : 12;
FOOTNOTE = smallRes ? 9 : 10;

let titleBold,
  titleRegular,
  bodyRegular,
  bodyBold,
  bodyTitle,
  bodyTitleBold,
  captionBold,
  captionRegular;
titleBold = { fontSize: TITLE, fontFamily: bold };
titleRegular = { fontSize: SUBTITLE, fontFamily: regular };
bodyRegular = { fontSize: BODY, fontFamily: regular };
bodyBold = { fontSize: BODY, fontFamily: bold };
bodyTitle = { fontSize: HEADER, fontFamily: regular };
bodyTitleBold = { fontSize: HEADER, fontFamily: bold };
captionBold = { fontSize: CAPTION, fontFamily: bold };
captionRegular = { fontSize: CAPTION, fontFamily: regular };

export default StyleSheet.create({
  //BODY
  bodyReg: { ...bodyRegular, ...color.fontColor },
  bodyRegWhite: { ...bodyRegular, ...color.fontColorWhite },
  bodyBold: { ...bodyBold, ...color.fontColor },
  bodyBoldWhite: { ...bodyBold, ...color.fontColorWhite },
  bodyTitleReg: { ...bodyTitle, ...color.fontColor },
  bodyTitleRegWhite: { ...bodyTitle, ...color.fontColorWhite },
  bodyTitleBold: { ...bodyTitleBold, ...color.fontColor },
  bodyTitleBoldWhite: { ...bodyTitleBold, ...color.fontColorWhite },
  labelBoldPurple: { ...captionBold, ...color.purple },
  bodyBoldGray: { ...bodyBold, ...color.gray },

  //TITLE
  titleBold: { ...titleBold, ...color.fontColor },
  subTitle: { ...titleRegular, ...color.fontColor },

  //CAPTION
  captionError: { ...captionRegular, ...color.warning },
});
