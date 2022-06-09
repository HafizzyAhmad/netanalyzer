import React, { useEffect, useState, Fragment } from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useNetInfo } from '@react-native-community/netinfo';
import Container from '../elements/Container';
import Primary from '../components/primary';
import Header from '../components/header';
import text from '../styles/text';
import List from '../components/list';
import LottieView from 'lottie-react-native';

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
          NetInfo.refresh().then();
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
  const imgInternet = require('../assets/image/internet.png');
  const imgNoInternet = require('../assets/image/no-internet.png');
  const connectionEnable = obj.type !== 'none';

  const connectionType =
    obj.type === 'cellular' || obj.type === 'wifi'
      ? obj.type.toUpperCase()
      : 'You are not connected to internet';

  const itemDetails = [
    {
      caption: 'Connection Availability: ',
      value:
        obj.isConnected === null
          ? 'Not Available'
          : obj.isConnected
          ? 'YES'
          : 'NO',
    },
    {
      caption: 'Internet Availability: ',
      value:
        obj.isInternetReachable === null
          ? 'Not Available'
          : obj.isInternetReachable
          ? 'YES'
          : 'NO',
    },
    {
      caption: 'Wi-Fi Enable: ',
      value:
        obj.isWifiEnabled === null
          ? 'Not Available'
          : obj.isWifiEnabled
          ? 'YES'
          : 'NO',
    },
    {
      caption: 'Connection Expensive: ',
      value:
        obj.isConnectionExpensive === null
          ? 'Not Available'
          : obj.isConnected
          ? 'YES'
          : 'NO',
    },
  ];

  const itemDetailsWifi = [
    {
      caption: 'Frequency: ',
      value: obj.details === null ? 'Not Available' : obj.details.frequency,
    },
    {
      caption: 'Strength: ',
      value:
        obj.details === null ? 'Not Available' : `${obj.details.strength}%`,
    },
    {
      caption: 'BSSID: ',
      value: obj.details === null ? 'Not Available' : obj.details.bssid,
    },
    {
      caption: 'IP Address: ',
      value: obj.details === null ? 'Not Available' : obj.details.ipAddress,
    },
    {
      caption: 'Subnet: ',
      value: obj.details === null ? 'Not Available' : obj.details.subnet,
    },
  ];

  const itemDetailsCellular = [
    {
      caption: 'Generation: ',
      value:
        obj.details === null ? 'Not Available' : obj.details.cellularGeneration,
    },
  ];

  return (
    <Container>
      <Header title="Analyzer App" />
      <ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <LottieView
            source={require('../assets/lottie/wave.json')}
            style={{ width: '80%', aspectRatio: 1 }}
            autoPlay
            loop
          />
          <TouchableOpacity style={{ position: 'absolute' }}>
            <Image
              source={connectionEnable ? imgInternet : imgNoInternet}
              style={{
                height: 100,
                width: 100,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', paddingVertical: 10 }}>
          <Text style={text.bodyBold}>{`${connectionType}`}</Text>
          {obj.detail !== null && obj.type === 'wifi' && (
            <Fragment>
              <View style={{ paddingVertical: 5, alignItems: 'center' }}>
                <Text style={text.bodyTitleBold}>{`${obj.details.ssid}`}</Text>
                {obj.details.ssid === undefined && (
                  <Text style={text.captionError}>
                    Please enable location to get wifi name
                  </Text>
                )}
              </View>
              {itemDetails.map((detail, index) => {
                const detailProps = {
                  detail,
                  index,
                };
                return <List key={index} {...detailProps} />;
              })}
              <Text style={[text.bodyBold, { paddingTop: 10 }]}>
                CONNECTION DETAILS
              </Text>
              {itemDetailsWifi.map((detail, index) => {
                const detailProps = {
                  detail,
                  index,
                };
                return <List key={index} {...detailProps} />;
              })}
            </Fragment>
          )}

          {obj.detail !== null && obj.type === 'cellular' && (
            <>
              <Text style={text.bodyTitleBold}>{`${obj.details.carrier}`}</Text>
              {itemDetails.map((detail, index) => {
                const detailProps = {
                  detail,
                  index,
                };
                return <List key={index} {...detailProps} />;
              })}
              <Text style={[text.bodyBold, { paddingTop: 20 }]}>
                CONNECTION DETAILS
              </Text>
              {itemDetailsCellular.map((detail, index) => {
                const detailProps = {
                  detail,
                  index,
                };
                return <List key={index} {...detailProps} />;
              })}
            </>
          )}
          <List {...itemDetails} />
          <View style={{ padding: 10 }} />
          <Primary
            onPress={() => {
              navigation.navigate('Device');
            }}
            title={'View Device Info'}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;
