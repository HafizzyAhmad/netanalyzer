import React, { useEffect, useState } from 'react';
import { View, Text, Button, PermissionsAndroid, Platform } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useNetInfo } from '@react-native-community/netinfo';
import Container from '../elements/Container';

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
            buttonPositive: 'OK',
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

  return (
    <Container>
      <Text style={{ color: 'black' }}>
        This is where we show connection info
      </Text>
      <Text style={{ color: 'black' }}>{JSON.stringify(netInfo.type)}</Text>
      <Text style={{ color: 'black' }}>
        Connected {JSON.stringify(netInfo.isConnected)}
      </Text>
      <Text style={{ color: 'black' }}>{JSON.stringify(netInfo.details)}</Text>
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
    </Container>
  );
};

export default Home;
