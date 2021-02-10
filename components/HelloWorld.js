import React from 'react';
import { Text, View } from 'react-native';

// 함수의 리턴 값이 JSX.Element면 React 컴포넌트가 된다
// JSX를 쓰려면 import React from 'react'; 필요
const HelloWorld = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
    </View>
  )
}
export default HelloWorld;