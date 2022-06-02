import React, { Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { Fragment } from 'react/cjs/react.production.min';
import header from '../styles/header';
import text from '../styles/text';
import * as RootNavigation from '../routes/RootNavigation';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { ArrowLeft } from './icon';

/**
 * @param title : String
 * @param hasArrow :bool
 */

const Header = ({ title, hasArrow }) => {
  return (
    <View style={[header.arrowContainer,{ backgroundColor: 'red'}]}>
      <View style={header.headerContainer}>
        <Text style={{color: 'black', fontSize: 20}}>Analyzer App</Text>
        {/* <ArrowLeft /> */}
      </View>
    </View>
  );
};

export default Header;
