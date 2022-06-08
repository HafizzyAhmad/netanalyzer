import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const ArrowLeft = props => {
  const { style, size, color } = props;

  return <Feather name="arrow-left" size={20} color={color} />;
};

ArrowLeft.defaultProps = {
  style: { alignSelf: 'center' },
  size: 30,
  color: '#000',
};

const IconRight = props => {
  const { style, size, color } = props;

  return <Feather name="rotate-cw" size={20} color={color} />;
};

IconRight.defaultProps = {
  style: { alignSelf: 'center' },
  size: 30,
  color: '#000',
};

export { ArrowLeft, IconRight };
