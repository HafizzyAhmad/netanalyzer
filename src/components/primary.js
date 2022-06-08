import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import primary from '../styles/button';

const Primary = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'black',
        width: '50%',
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
      }}>
      <Text style={{ color: 'red', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Primary;
