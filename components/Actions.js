import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { View } from 'react-native';
import { ListItem, Avatar, Icon  } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { removeAction } from '../redux/actions'

const Actions = () => {

  // store에 특정(actions) state를 선택
  const actions = useSelector(state => state.actions);
  // useSelector: 원하는 state 선택             ↑이 변수는 combineReducers에 등록된 이름을 가져온다
  //   actions 리듀서가 state를 리턴해서 state에서 update 되고, 그 update 된 state의 이름이 actions -> state.actions를 useSelector로 가져온다
  console.log('test------>', actions);
  //                          
  // 리덕스 상태제어 흐름도에서 컴포넌트가 state에서 데이터 조회,참조하려면 useSelector써야함

  const dispatch = useDispatch();

  return(
    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        actions.map((item, i) => (
          <ListItem containerStyle={{width:"80%"}} key={i}>
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon name='close' type='ionicon' color='gray' onPress={()=>{dispatch(removeAction(item.id))}} />
          </ListItem>
        ))
      }
      </ScrollView>
    </View>
  )
}

export default Actions;


// import React from 'react';
// import { useSelector } from 'react-native';
// import { Text, View } from 'react-native';

// // 함수의 리턴 값이 JSX.Element면 React 컴포넌트가 된다
// // JSX를 쓰려면 import React from 'react'; 필요
// const Actions = () => {

//   // store에 특정 state를 선택
//   const actions = useSelector(state => state.actions)
//   console.log('-- actions redux state --')
//   console.log(actions);

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       }}>
//       <Text>Actions</Text>
//     </View>
//   )
// }
// export default Actions;