import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import text from '../../styles/text';

/**
 * @param detail object
 * @param title string
 */

const Detail = ({ detail, title }) => {
  // console.log('Detail OS', detail);
  return (
    <Fragment>
      <Text style={[text.bodyTitleBold, { paddingTop: 20 }]}>{title}</Text>
      <View style={{ paddingVertical: 5 }}>
        {detail.map((item, index) => (
          <View key={index} style={{ paddingVertical: 3 }}>
            <Text style={text.bodyBoldGray}>{item.caption}</Text>
            {Array.isArray(item.value) === false ? (
              <Text style={text.bodyReg}>{item.value}</Text>
            ) : (
              item.value.map((data, key) => (
                <Text key={key} style={text.bodyReg}>
                  {data}
                </Text>
              ))
            )}
          </View>
        ))}
      </View>
    </Fragment>
  );
};

export default Detail;
