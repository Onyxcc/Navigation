import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={{flex: 1}}>
      <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
