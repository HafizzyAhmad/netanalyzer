import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Platform,
} from 'react-native';
import DeviceInfo, { getManufacturer } from 'react-native-device-info';
import Container from '../elements/Container';
import Header from '../components/header';
import text from '../styles/text';
import Detail from '../components/device/detail';

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
      device.isCameraPresent = await DeviceInfo.isCameraPresent(); // no ios
      device.deviceName = await DeviceInfo.getDeviceName();
      device.usedMemory = await DeviceInfo.getUsedMemory();
      device.userAgent = await DeviceInfo.getUserAgent();
      device.instanceId = await DeviceInfo.getInstanceId(); // no ios
      device.installReferrer = await DeviceInfo.getInstallReferrer(); // no ios
      device.installerPackageName = await DeviceInfo.getInstallerPackageName();
      device.isEmulator = await DeviceInfo.isEmulator();
      device.fontScale = await DeviceInfo.getFontScale();
      device.hasNotch = await DeviceInfo.hasNotch();
      device.firstInstallTime = await DeviceInfo.getFirstInstallTime(); // no ios
      device.lastUpdateTime = await DeviceInfo.getLastUpdateTime(); // no ios
      device.serialNumber = await DeviceInfo.getSerialNumber(); // no ios
      device.androidId = await DeviceInfo.getAndroidId(); // no ios
      device.IpAddress = await DeviceInfo.getIpAddress();
      device.MacAddress = await DeviceInfo.getMacAddress();
      device.phoneNumber = await DeviceInfo.getPhoneNumber(); // no ios
      device.ApiLevel = await DeviceInfo.getApiLevel(); // no ios
      device.carrier = await DeviceInfo.getCarrier();
      device.totalMemory = await DeviceInfo.getTotalMemory();
      device.maxMemory = await DeviceInfo.getMaxMemory(); // no ios
      device.totalDiskCapacity = await DeviceInfo.getTotalDiskCapacity();
      device.totalDiskCapacityOld = await DeviceInfo.getTotalDiskCapacityOld();
      device.freeDiskStorage = await DeviceInfo.getFreeDiskStorage();
      device.freeDiskStorageOld = await DeviceInfo.getFreeDiskStorageOld();
      device.batteryLevel = await DeviceInfo.getBatteryLevel();
      device.isLandscape = await DeviceInfo.isLandscape();
      device.isAirplaneMode = await DeviceInfo.isAirplaneMode(); // no ios
      device.isBatteryCharging = await DeviceInfo.isBatteryCharging();
      device.isPinOrFingerprintSet = await DeviceInfo.isPinOrFingerprintSet();
      device.supportedAbis = await DeviceInfo.supportedAbis();
      device.hasSystemFeature = await DeviceInfo.hasSystemFeature(
        'android.software.webview',
      ); // no ios
      device.getSystemAvailableFeatures =
        await DeviceInfo.getSystemAvailableFeatures(); // no ios
      device.powerState = await DeviceInfo.getPowerState();
      device.isLocationEnabled = await DeviceInfo.isLocationEnabled();
      device.headphones = await DeviceInfo.isHeadphonesConnected();
      device.getAvailableLocationProviders =
        await DeviceInfo.getAvailableLocationProviders();
      device.bootloader = await DeviceInfo.getBootloader(); // no ios
      device.device = await DeviceInfo.getDevice(); // no ios
      device.display = await DeviceInfo.getDisplay(); // no ios
      device.fingerprint = await DeviceInfo.getFingerprint(); // no ios
      device.hardware = await DeviceInfo.getHardware(); // no ios
      device.host = await DeviceInfo.getHost(); // no ios
      device.product = await DeviceInfo.getProduct(); // no ios
      device.tags = await DeviceInfo.getTags(); // no ios
      device.type = await DeviceInfo.getType(); // no ios
      device.baseOS = await DeviceInfo.getBaseOs(); // no ios
      device.previewSdkInt = await DeviceInfo.getPreviewSdkInt(); // no ios
      device.securityPatch = await DeviceInfo.getSecurityPatch(); // no ios
      device.codename = await DeviceInfo.getCodename(); // no ios
      device.incremental = await DeviceInfo.getIncremental(); // no ios
      device.supported32BitAbis = await DeviceInfo.supported32BitAbis(); // no ios
      device.supported64BitAbis = await DeviceInfo.supported64BitAbis(); // no ios
      device.synchronizedUniqueId = await DeviceInfo.syncUniqueId(); // no android
    } catch (e) {
      console.log('error', e);
    }
    setDeviceHardware(device);
  };

  const infoOSiOS = [
    {
      caption: 'Build ID',
      value: deviceHardware.buildId,
    },
    {
      caption: 'User Agent',
      value: deviceHardware.userAgent,
    },
    {
      caption: 'Synchronized Unique ID',
      value: deviceHardware.synchronizedUniqueId,
    },
    {
      caption: 'Supported Abis',
      value: deviceHardware.supportedAbis,
    },
  ];

  const infoOS = [
    {
      caption: 'Android ID: ',
      value: deviceHardware.androidId,
    },
    {
      caption: 'User Agent: ',
      value: deviceHardware.userAgent,
    },
    {
      caption: 'Instance ID: ',
      value: deviceHardware.instanceId,
    },
    {
      caption: 'Build ID: ',
      value: deviceHardware.buildId,
    },
    {
      caption: 'Synchronized Unique ID: ',
      value: deviceHardware.synchronizedUniqueId,
    },
    {
      caption: 'Bootloader: ',
      value: deviceHardware.bootloader,
    },
    {
      caption: 'Security Patch: ',
      value: deviceHardware.securityPatch,
    },
    {
      caption: 'Code Name: ',
      value: deviceHardware.codename,
    },
    {
      caption: 'Host: ',
      value: deviceHardware.host,
    },
    {
      caption: 'API Level: ',
      value: deviceHardware.ApiLevel,
    },
    {
      caption: 'Supported Abis: ',
      value: deviceHardware.supportedAbis,
    },
    {
      caption: 'Supported 32 Bit Abis: ',
      value: deviceHardware.supported32BitAbis,
    },
    {
      caption: 'Supported 64 Bit Abis: ',
      value: deviceHardware.supported64BitAbis,
    },
  ];

  const infoHardware = [
    {
      caption: 'Product',
      value: deviceHardware.product ? deviceHardware.product : 'Not Available',
    },
    {
      caption: 'Hardware',
      value: deviceHardware.hardware
        ? deviceHardware.hardware
        : 'Not Available',
    },
    {
      caption: 'Pin or Fingerprint Set',
      value: deviceHardware.isPinOrFingerprintSet ? 'Enable' : 'Not Available',
    },
    {
      caption: 'Battery Level',
      value:
        deviceHardware.powerState !== undefined
          ? deviceHardware.powerState.batteryLevel === 1
            ? '100%'
            : deviceHardware.powerState.batteryLevel
          : 'Not Available',
    },
    {
      caption: 'Low Power Mode',
      value:
        deviceHardware.powerState !== undefined
          ? deviceHardware.powerState.lowPowerMode
            ? 'ON'
            : 'OFF'
          : 'Not Available',
    },
    {
      caption: 'Battery Status',
      value:
        deviceHardware.powerState !== undefined
          ? deviceHardware.powerState.batteryState.toUpperCase()
          : 'Not Available',
    },
    {
      caption: 'Mac Address',
      value: deviceHardware.MacAddress
        ? deviceHardware.MacAddress
        : 'Not Available',
    },
  ];

  const infoMemory = [
    {
      caption: 'Used Memory',
      value: deviceHardware.usedMemory,
    },
    {
      caption: 'Total Memory',
      value: deviceHardware.totalMemory,
    },
    {
      caption: 'Free Storage ',
      value: deviceHardware.freeDiskStorage,
    },
    {
      caption: 'Total Storage',
      value: deviceHardware.totalDiskCapacity,
    },
  ];

  return (
    <Container>
      <Header
        title={
          deviceHardware.manufacturer
            ? deviceHardware.manufacturer.toUpperCase()
            : 'Device'
        }
        enableBack={true}
        hasIconRight={true}
        onPress={hardwareSync}
      />
      <ScrollView style={{ paddingHorizontal: 20, paddingBottom: 100 }}>
        <Text style={[text.titleBold]}>{deviceHardware.deviceName}</Text>
        <Detail
          title="Operating System (OS) Information"
          detail={Platform.OS === 'ios' ? infoOSiOS : infoOS}
        />
        {Platform.OS === 'android' && (
          <Detail title="Hardware Information" detail={infoHardware} />
        )}
        <Detail title="Memory Information" detail={infoMemory} />
      </ScrollView>
    </Container>
  );
};

export default Home;
