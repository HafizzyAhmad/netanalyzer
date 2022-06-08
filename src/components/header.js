import React, { Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { Fragment } from 'react/cjs/react.production.min';
import header from '../styles/header';
import text from '../styles/text';
import * as RootNavigation from '../routes/RootNavigation';
// import Icon from 'react-native-vector-icons/Ionicons';
import { ArrowLeft, IconRight } from './icon';
import { useNavigation } from '@react-navigation/native';

/**
 * @param title : String
 * @param enableBack :bool
 * @param hasIconRight : bool
 * @param goBack : return
 * @param onPress : return
 */

const Header = ({ title, enableBack, hasIconRight, onPress }) => {
  const enableBack2 = true;
  const hasIconRight2 = true;
  const navigation = useNavigation();

  return (
    <Fragment>
      <View style={[header.arrowContainer]}>
        {enableBack ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </TouchableOpacity>
        ) : (
          <View style={{ height: 20, width: 20 }} />
        )}
        <View style={{ alignItems: 'center'}}>
          <Text style={text.bodyTitleBold}>{title}</Text>
        </View>
        {hasIconRight ? (
          <TouchableOpacity onPress={() => onPress()}>
            <IconRight />
          </TouchableOpacity>
        ) : (
          <View style={{ height: 20, width: 20 }} />
        )}
      </View>
    </Fragment>
  );
};

export default Header;
