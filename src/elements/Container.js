import React from 'react';
import { SafeAreaView } from 'react-native';

/*
 * created to be the parent of component for device with notch
 * added background white as base color
 * children can be from multiple components
 */

const Container = ({ children }) => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: '#fff',
    }}>
    {children}
  </SafeAreaView>
);

export default Container;
