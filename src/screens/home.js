import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  PermissionsAndroid,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useNetInfo } from '@react-native-community/netinfo';
import Container from '../elements/Container';
import Primary from '../components/primary';
import Header from '../components/header';

const Home = ({ navigation }) => {
  const netInfo = useNetInfo();

  const [location, setLocation] = useState();

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Enable access location.',
            message: 'This app needs access to your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'Okay',
          },
        );
        console.log('Check granted', granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setLocation(true);
          // alert('Location permission approved');
        } else {
          setLocation(false);
          // alert('Location permission denied');
        }
      } catch (err) {
        console.log('error', err);
      }
    }
  };

  console.log('Permission Location', location);

  useEffect(() => {
    NetInfo.fetch().then(res => {});
  }, []);

  // const fetch = () => {};
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {});
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    //status change
    if (location === false || location === undefined) {
      requestLocationPermission();
    }
  }, [netInfo.isConnected, location]);

  const obj = JSON.parse(JSON.stringify(netInfo));
  console.log('Check object', obj);

  console.log('Null tak', obj.details === null);

  const imgWave = require('../assets/image/pulse.png');

  return (
    <Container>
      <Header />
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <Image
          source={imgWave}
          style={{
            height: 300,
            width: 300,
          }}
        />
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <Text style={{ color: 'black', fontFamily: 'ProximaNova-Extrabold' }}>
          This is where we show connection info
        </Text>
         <Text style={{ color: 'black' }}>{`${obj.type}`}</Text>
      {/*<Text
        style={{
          color: 'black',
        }}>{`Connection availability: ${obj.isConnected}`}</Text>
      <Text
        style={{
          color: 'black',
        }}>{`Internet availability: ${obj.isInternetReachable}`}</Text>
      <Text
        style={{ color: 'black' }}>{`WiFi enable: ${obj.isWifiEnabled}`}</Text>
      {obj.detail !== null && obj.type === 'cellular' && (
        <>
          <Text
            style={{
              color: 'black',
            }}>{`Carrier: ${obj.details.carrier}`}</Text>
          <Text
            style={{
              color: 'black',
            }}>{`Generation: ${obj.details.cellularGeneration}`}</Text>
          <Text
            style={{
              color: 'black',
            }}>{`Connection Expensive: ${obj.details.isConnectionExpensive}`}</Text>
        </>
      )}
      {obj.detail !== null && obj.type === 'wifi' && (
        <>
          <Text
            style={{ color: 'black' }}>{`WiFi Name: ${obj.details.ssid}`}</Text>
          <Text
            style={{
              color: 'black',
            }}>{`Frequency: ${obj.details.frequency}`}</Text>
          <Text
            style={{
              color: 'black',
            }}>{`WiFI Strength: ${obj.details.strength}%`}</Text>
          <Text
            style={{
              color: 'black',
            }}>{`WiFi BSSID: ${obj.details.bssid}`}</Text>
          <Text
            style={{
              color: 'black',
            }}>{`IP Address: ${obj.details.ipAddress}`}</Text>
          <Text
            style={{ color: 'black' }}>{`Subnet: ${obj.details.subnet}`}</Text>
          <Text
            style={{
              color: 'black',
            }}>{`Connection Expensive: ${obj.details.isConnectionExpensive}`}</Text>
        </>
      )} */}

        <Button
          onPress={() => navigation.navigate('Device')}
          title="View Device Info"
          color="#841584"
        />
        {location === true ? (
          <Text style={{ color: 'black' }}>Location enabled</Text>
        ) : (
          <Button
            onPress={() => alert('Go to setting')}
            title="Enable Location"
            color="#841584"
          />
        )}
        <Primary />
      </View>
    </Container>
  );
};

export default Home;
