import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import button from '../styles/button';
import primary from '../styles/button';
import color from '../styles/color';
import text from '../styles/text';

const Primary = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[button.primary]}>
      <Text style={text.bodyBoldWhite}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Primary;
