import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import getInfo from '../DeviceInfo';
import DeviceInfo, { getManufacturer } from 'react-native-device-info';

const Home = () => {
  const [deviceHardware, setDeviceHardware] = useState({});

  useEffect(() => {
    hardwareSync();
  }, []);

  const hardwareSync = async () => {
    let device = {};
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
    setDeviceHardware(device);
  };

  console.log('Device Hardware', deviceHardware);
  return (
    <ScrollView>
      <Text style={{ color: 'black' }}>This is where we show device info</Text>
      <Text style={{ color: 'black' }}>{`manufacturer: ${deviceHardware.manufacturer}`}</Text>
      <Text style={{ color: 'black' }}>{`buildId: ${deviceHardware.buildId}`}</Text>
      <Text style={{ color: 'black' }}>{`isCameraPresent: ${deviceHardware.isCameraPresent}`}</Text>
      <Text style={{ color: 'black' }}>{`deviceName: ${deviceHardware.deviceName}`}</Text>
      <Text style={{ color: 'black' }}>{`usedMemory: ${deviceHardware.usedMemory}`}</Text>
      <Text style={{ color: 'black' }}>{`userAgent: ${deviceHardware.userAgent}`}</Text>
      <Text style={{ color: 'black' }}>{`instanceId: ${deviceHardware.instanceId}`}</Text>
      <Text style={{ color: 'black' }}>{`installReferrer: ${deviceHardware.installReferrer}`}</Text>
      <Text style={{ color: 'black' }}>{`installerPackageName: ${deviceHardware.installerPackageName}`}</Text>
      <Text style={{ color: 'black' }}>{`isEmulator: ${deviceHardware.isEmulator}`}</Text>
      <Text style={{ color: 'black' }}>{`fontScale: ${deviceHardware.fontScale}`}</Text>
      <Text style={{ color: 'black' }}>{`hasNotch: ${deviceHardware.hasNotch}`}</Text>
      <Text style={{ color: 'black' }}>{`firstInstallTime: ${deviceHardware.firstInstallTime}`}</Text>
      <Text style={{ color: 'black' }}>{`lastUpdateTime: ${deviceHardware.lastUpdateTime}`}</Text>
      <Text style={{ color: 'black' }}>{`serialNumber: ${deviceHardware.serialNumber}`}</Text>
      <Text style={{ color: 'black' }}>{`androidId: ${deviceHardware.androidId}`}</Text>
      <Text style={{ color: 'black' }}>{`IpAddress: ${deviceHardware.IpAddress}`}</Text>
      <Text style={{ color: 'black' }}>{`MacAddress: ${deviceHardware.MacAddress}`}</Text>
      <Text style={{ color: 'black' }}>{`phoneNumber: ${deviceHardware.phoneNumber}`}</Text>
      <Text style={{ color: 'black' }}>{`ApiLevel: ${deviceHardware.ApiLevel}`}</Text>
      <Text style={{ color: 'black' }}>{`carrier: ${deviceHardware.carrier}`}</Text>
      <Text style={{ color: 'black' }}>{`totalMemory: ${deviceHardware.totalMemory}`}</Text>
      <Text style={{ color: 'black' }}>{`maxMemory: ${deviceHardware.maxMemory}`}</Text>
      <Text style={{ color: 'black' }}>{`totalDiskCapacity: ${deviceHardware.totalDiskCapacity}`}</Text>
      <Text style={{ color: 'black' }}>{`totalDiskCapacityOld: ${deviceHardware.totalDiskCapacityOld}`}</Text>
      <Text style={{ color: 'black' }}>{`freeDiskStorage: ${deviceHardware.freeDiskStorage}`}</Text>
      <Text style={{ color: 'black' }}>{`freeDiskStorageOld: ${deviceHardware.freeDiskStorageOld}`}</Text>
      <Text style={{ color: 'black' }}>{`batteryLevel: ${deviceHardware.batteryLevel}`}</Text>
      <Text style={{ color: 'black' }}>{`isLandscape: ${deviceHardware.isLandscape}`}</Text>
      <Text style={{ color: 'black' }}>{`isAirplaneMode: ${deviceHardware.isAirplaneMode}`}</Text>
      <Text style={{ color: 'black' }}>{`isBatteryCharging: ${deviceHardware.isBatteryCharging}`}</Text>
      <Text style={{ color: 'black' }}>{`isPinOrFingerprintSet: ${deviceHardware.isPinOrFingerprintSet}`}</Text>
      <Text style={{ color: 'black' }}>{`supportedAbis: ${deviceHardware.supportedAbis}`}</Text>
      <Text style={{ color: 'black' }}>{`hasSystemFeature: ${deviceHardware.hasSystemFeature}`}</Text>
      {/* <Text style={{ color: 'black' }}>{deviceHardware.getSystemAvailableFeatures}</Text> */}
      {/* <Text style={{ color: 'black' }}>{deviceHardware.powerState}</Text> */}
      <Text style={{ color: 'black' }}>{`isLocationEnabled: ${deviceHardware.isLocationEnabled}`}</Text>
      <Text style={{ color: 'black' }}>{`headphones: ${deviceHardware.headphones}`}</Text>
      {/* <Text style={{ color: 'black' }}>{deviceHardware.getAvailableLocationProviders}</Text> */}
      <Text style={{ color: 'black' }}>{`bootloader: ${deviceHardware.bootloader}`}</Text>
      <Text style={{ color: 'black' }}>{`device: ${deviceHardware.device}`}</Text>
      <Text style={{ color: 'black' }}>{`fingerprint: ${deviceHardware.fingerprint}`}</Text>
      <Text style={{ color: 'black' }}>{`hardware: ${deviceHardware.hardware}`}</Text>
      <Text style={{ color: 'black' }}>{`host: ${deviceHardware.host}`}</Text>
      <Text style={{ color: 'black' }}>{`product: ${deviceHardware.product}`}</Text>
      <Text style={{ color: 'black' }}>{`tags: ${deviceHardware.tags}`}</Text>
      <Text style={{ color: 'black' }}>{`type: ${deviceHardware.type}`}</Text>
      <Text style={{ color: 'black' }}>{`baseOS: ${deviceHardware.baseOS}`}</Text>
      <Text style={{ color: 'black' }}>{`previewSdkInt: ${deviceHardware.previewSdkInt}`}</Text>
      <Text style={{ color: 'black' }}>{`securityPatch: ${deviceHardware.securityPatch}`}</Text>
      <Text style={{ color: 'black' }}>{`codename: ${deviceHardware.codename}`}</Text>
      <Text style={{ color: 'black' }}>{`incremental: ${deviceHardware.incremental}`}</Text>
      <Text style={{ color: 'black' }}>{`supported32BitAbis: ${deviceHardware.supported32BitAbis}`}</Text>
      <Text style={{ color: 'black' }}>{`supported64BitAbis: ${deviceHardware.supported64BitAbis}`}</Text>
      <Text style={{ color: 'black' }}>{`synchronizedUniqueId: ${deviceHardware.synchronizedUniqueId}`}</Text>

    </ScrollView>
  );
};

export default Home;
