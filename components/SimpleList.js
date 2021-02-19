import React, { useState, useCallback } from 'react';
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
  // state가 업데이트 되면 state를 가지고 있는 컴포넌트 안의 요소들이 모두 다시 생성됨
  // simpleData를 컴포넌트 밖에 만듦


  // state가 바뀌면 state가 포함된 컴포넌트가 다시 렌더링 되며
  // 그안에 있는 함수, 변수 중복해서 새로 생성됨 -> 방지하기 위해memoizing 사용
  // memoizing: 렌더링마다 함수가 새로 생성되는걸 방지
  // const itemPressed = (data) => {
  //   console.log(data);
  //   setItem(data);
  // };

  // memoizing function
  // const 함수명 = useCallback(함수본체, [감지할변수]), 
  // 감지하는 변수값이 바뀔때마다 함수가 다시 생성
  // 빈배열이면 컴포넌트 처음 생성시만 함수 생성
  const itemPressed = useCallback((data)=>{
    console.log(data);
    setItem(data);
  }, []);

  return (
    // JSX.Element 영역
    <View 
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {/* JSX Element에 core component(View, Text 등)가 아닌 코드를 삽입하려면 {} 중괄호 필요 */}
      {/* map: 원래 배열의 요소를 변경하여 개수만큼 리턴 */}
      {/* JSX.Element가 들어갈 자리이므로 JSX.Element 리턴하게 함. */}
      {/* simpleData는 객체 배열(객체 array)-[{},{},{}]인데, JSX array-[<>...</>,<>...</>,<>...</>]로 바꾸겠다 */}
      {/* JSX.Element에 반복요소는 {}, JSX.Element를 리턴하는 map함수를 이용한다 */}

      {
      simpleData.map(data => {
        // 반복요소는 키가 없으면 에러가 뜰 수 있다. 렌더링 시 추적이 안돼, 성능이 떨어짐->키 쓰게하려 에러발생
          return (
            // <TouchableOpacity> 터치 가능한 투명한 영역 생성
            // <TouchableOpacity key={data.id} onPress={()=>setItem(data)}>
            <TouchableOpacity key={data.id} onPress={()=>itemPressed(data)}>
              <Text>{data.id} {data.title}</Text>
            </TouchableOpacity>
          )
        })
      }      
      <Text style={{marginBottom: 10, marginTop: 30, fontWeight: "bold"}}>Selected</Text>
      <SelectedItem item={item}></SelectedItem>
                {/*   ↑ 속성 item과 SelectedItme.js 의 SelectedItem 함수의 매개변수로 받는 변수 { item }같아야함 */}

    </View>

  )
  
}
export default SimpleList;