import React from 'react';
import { Text, View, Button } from 'react-native';

import { LISTDATA } from '../shared/list'
// { LISTDATA } : import하는 list 모듈에서 LISTDATA 상수만을 선택

import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

// 함수의 리턴 값이 JSX.Element면 React 컴포넌트가 된다
// JSX를 쓰려면 import React from 'react'; 필요
// Navigator로 화면을 이동할 때(여기서는 List 컴포넌트로 이동할때)
// 컴포넌트 속성으로 navigation, route 전달되는데 여기서는 navigation만 사용
// stack간 navigator로 화면이동 시(컴포넌트 이동시)
const List = ({ navigation }) => {
  const list = LISTDATA;
  // console.log(list);
  return (
    <View style={{flex: 1}}>
      <ScrollView 
        contentContainerStyle={
          { flexGrow:1, alignItems:"center", justifyContent:"center"}}
          >
        {
          list.map((item, i) => (
            <ListItem 
              containerStyle={{width:"80%"}} 
              key={i} // redux state제어 등 활용됨. 바뀐요소만 키로 추적해서 재렌더링할수 있게한다
              onPress={ ()=>{navigation.navigate("Details", {id: item.id, testString: "good", testNumber: 33})} }
              //                              Details라는 component로 찾아감
            >
                      {/* key값이 바뀌면 ListItem이 다시 렌더링됨 */}
                      <Avatar source={{uri: item.image}} />
                      <ListItem.Content>
                        <ListItem.Title>{item.title}</ListItem.Title>
                        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                      </ListItem.Content>

            </ListItem>
          ))
        }
      </ScrollView>
      {/* <Text>List</Text>
      <Button 
        title="Go To Details" 
        onPress={()=>{navigation.navigate("Details", {id: 1})}}
      /> */}
    </View>
  )
}
export default List;