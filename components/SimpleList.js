import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SelectedItem from './SelectedItem';

const simpleData = [
  {id:1, title:"Lorem ipsum dolor sit amet"},
  {id:2, title:"consectetur adipiscing elit, sed do eiusmod tempor"},
  {id:3, title:"incididunt ut labore et dolore magna aliqua"},
]

const SimpleList = () => {
  const [item, setItem] = useState({});

  // 렌더링마다 함수가 새로 생성됨 -> memoizing 사용
  // const itemPressed = (data) => {
  //   console.log(data);
  //   setItem(data);
  // };

  // memoizing: 렌더링마다 함수가 새로 생성되는걸 방지
  // const 함수명 = useCallback(함수본체, [감지할변수]), 
  // 감지하는 변수값이 바뀔때마다 함수가 다시 생성->빈배열이면 컴포넌트 처음 생성시만 함수 생성
  const itemPressed = useCallback((data)=>{
    console.log(data);
    setItem(data);
  }, []);

  return (
    <View 
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {/* JSX Element에 코드를 삽입하려면 {} 중괄호를 삽입 */}
      {
        // map: 원래 배열 요소의 개수만큼 요소를 변경하여 리턴
        // JSX.Element 리턴하게 함. -> [ {} {} {}] 객체 배열을 ->   <> <> <> 로 변경하겠다
        
        simpleData.map(data => {
          return (
            //  <TouchableOpacity> 터치 가능한 투명한 영역 생성
            <TouchableOpacity key={data.id} onPress={()=>itemPressed(data)}>
              <Text>{data.id} {data.title}</Text>
            </TouchableOpacity>
          )
        })
      }
    <Text style={{marginBottom: 10, marginTop: 30, fontWeight: "bold"}}>Selected</Text>
    <SelectedItem item={item}></SelectedItem>

    </View>

  )
}

export default SimpleList;