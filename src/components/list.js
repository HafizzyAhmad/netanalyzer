import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import text from '../styles/text';

/**
 * 
 * @param detail array
 * @param index object
 */

const List = ({ detail, index }) => {
  return (
    <Fragment>
      <View key={index} style={{flexDirection: 'row'}}>
        {detail !== undefined && (
          <>
            <Text style={text.bodyReg}>{detail.caption}</Text>
            <Text style={text.bodyReg}>{detail.value}</Text>
          </>
        )}
      </View>
    </Fragment>
  )
}

export default List;
