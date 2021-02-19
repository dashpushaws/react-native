import React from 'react';
import { View, Text } from 'react-native';

// 선택한 아이템 한개를 속성으로 내려 받음
// 객체로 받으려면 중괄호 빼고 prop -> (prop) => ...
const SelectedItem = ({ item }) => {
  return (
    <View>
      <Text>{item.id} {item.title}</Text>
    </View>
  )
}

export default SelectedItem;