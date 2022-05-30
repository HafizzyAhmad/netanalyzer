import NetInfo from '@react-native-community/netinfo';

/**
 * created to add network checking capabilities
 * before any call API made
 * @returns boolean
 */

export const checkNetwork = async () => {
  const response = await NetInfo.fetch();
  console.log('Response', response);
  return response.isConnected;
};
