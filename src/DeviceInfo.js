import { Platform, Dimensions, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';

let version = DeviceInfo.getReadableVersion();
version = version.substr(0, version.lastIndexOf('.'));
version +=
  Platform.OS === 'ios' ? ` build(${DeviceInfo.getBuildNumber()})` : '';

const versionNoBuild = DeviceInfo.getVersion();

const deviceHeight = () => {
  return (
    Dimensions.get('window').height +
    (Platform.OS === 'ios'
      ? 0
      : StatusBar.currentHeight > 27
      ? 0
      : -StatusBar.currentHeight)
  );
};

const screenHeight = Dimensions.get('screen').height;
const isIphoneX = Platform.OS === 'ios' && DeviceInfo.hasNotch();
const isIphoneXStatusBar = isIphoneX ? 44 : 20;

export default {
  version,
  versionNoBuild,
  screenHeight,
  get deviceHeight() {
    return deviceHeight();
  },
  get screenWidth() {
    return Dimensions.get('window').width;
  },
  platform: Platform.OS,
  isIos: Platform.OS === 'ios',
  isTablet: DeviceInfo.isTablet(),
  isHasNotch:
    Platform.OS === 'ios'
      ? screenHeight >= 812 && screenHeight <= 896
      : DeviceInfo.hasNotch(),
  isIphoneX,
  statusBarHeight: Platform.OS === 'ios' ? isIphoneXStatusBar : 0,
};
