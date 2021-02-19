// React Native Counter Example using Hooks!
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  // UI의 데이터 부분을 변경할 때 필요한 변수 => state
  // const [state명, state변경함수명] = useState(state초기값);d\
  const [count, setCount] = useState(1);
// 훅을 이용해 state 제어를 할 수 있게됨 function component에서도
  return (
    <View 
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
                    {/* {state 또는 prop}  */}
      <Text>You clicked {count} times</Text>
                      {/* state변경함수명(변경할state값)  */}
                      {/* state 변경하면 화면이 다시 렌더링됨 Counter 컴포넌트가 */}
      <Button onPress={() => setCount(count+1)} title="Click me!" />
                      {/* setCount(xxx)의 xxx가 연산결과가 state변수 count로 들어감. count = xxx; */}
      {/* 버튼을 누르면 setCount함수가 실행이 되고 위의 const [count, setCount] = useState()가 변경되어 */}
      {/* return에 jsx문법에 반영이 된다 */}
          {/* 리액트는 상태변경이 새로운 객체를 생성해서 대입, 뷰는 생성되어잇는 객체를 수정 */}
    </View>
  )

}

export default Counter;