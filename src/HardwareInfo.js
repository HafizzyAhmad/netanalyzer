import { useState } from 'react';
import DeviceInfo, { getManufacturer } from 'react-native-device-info';


export const hardware = async () => {
  let device = {};
  // const [deviceHardware, setDeviceHardware] = useState({});
  try {
    device.manufacturer = await getManufacturer();
    device.buildId = await DeviceInfo.getBuildId();
    device.isCameraPresent = await DeviceInfo.isCameraPresent();
    device.deviceName = await DeviceInfo.getDeviceName();
    device.usedMemory = await DeviceInfo.getUsedMemory();
    device.userAgent = await DeviceInfo.getUserAgent();
    device.instanceId = await DeviceInfo.getInstanceId();
    device.installReferrer = await DeviceInfo.getInstallReferrer();
    device.installerPackageName = await DeviceInfo.getInstallerPackageName();
    device.isEmulator = await DeviceInfo.isEmulator();
    device.fontScale = await DeviceInfo.getFontScale();
    device.hasNotch = await DeviceInfo.hasNotch();
    device.firstInstallTime = await DeviceInfo.getFirstInstallTime();
    device.lastUpdateTime = await DeviceInfo.getLastUpdateTime();
    device.serialNumber = await DeviceInfo.getSerialNumber();
    device.androidId = await DeviceInfo.getAndroidId();
    device.IpAddress = await DeviceInfo.getIpAddress();
    device.MacAddress = await DeviceInfo.getMacAddress();
    device.phoneNumber = await DeviceInfo.getPhoneNumber();
    device.ApiLevel = await DeviceInfo.getApiLevel();
    device.carrier = await DeviceInfo.getCarrier();
    device.totalMemory = await DeviceInfo.getTotalMemory();
    device.maxMemory = await DeviceInfo.getMaxMemory();
    device.totalDiskCapacity = await DeviceInfo.getTotalDiskCapacity();
    device.totalDiskCapacityOld = await DeviceInfo.getTotalDiskCapacityOld();
    device.freeDiskStorage = await DeviceInfo.getFreeDiskStorage();
    device.freeDiskStorageOld = await DeviceInfo.getFreeDiskStorageOld();
    device.batteryLevel = await DeviceInfo.getBatteryLevel();
    device.isLandscape = await DeviceInfo.isLandscape();
    device.isAirplaneMode = await DeviceInfo.isAirplaneMode();
    device.isBatteryCharging = await DeviceInfo.isBatteryCharging();
    device.isPinOrFingerprintSet = await DeviceInfo.isPinOrFingerprintSet();
    device.supportedAbis = await DeviceInfo.supportedAbis();
    device.hasSystemFeature = await DeviceInfo.hasSystemFeature(
      'android.software.webview',
    );
    device.getSystemAvailableFeatures =
      await DeviceInfo.getSystemAvailableFeatures();
    device.powerState = await DeviceInfo.getPowerState();
    device.isLocationEnabled = await DeviceInfo.isLocationEnabled();
    device.headphones = await DeviceInfo.isHeadphonesConnected();
    device.getAvailableLocationProviders =
      await DeviceInfo.getAvailableLocationProviders();
    device.bootloader = await DeviceInfo.getBootloader();
    device.device = await DeviceInfo.getDevice();
    device.display = await DeviceInfo.getDisplay();
    device.fingerprint = await DeviceInfo.getFingerprint();
    device.hardware = await DeviceInfo.getHardware();
    device.host = await DeviceInfo.getHost();
    device.product = await DeviceInfo.getProduct();
    device.tags = await DeviceInfo.getTags();
    device.type = await DeviceInfo.getType();
    device.baseOS = await DeviceInfo.getBaseOs();
    device.previewSdkInt = await DeviceInfo.getPreviewSdkInt();
    device.securityPatch = await DeviceInfo.getSecurityPatch();
    device.codename = await DeviceInfo.getCodename();
    device.incremental = await DeviceInfo.getIncremental();
    device.supported32BitAbis = await DeviceInfo.supported32BitAbis();
    device.supported64BitAbis = await DeviceInfo.supported64BitAbis();
    device.synchronizedUniqueId = await DeviceInfo.syncUniqueId();
  } catch (e) {
    console.log('error', e);
  }
  // setDeviceHardware(device);
  return device;
};

export default () => {
  hardware();
};
