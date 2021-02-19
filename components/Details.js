import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

import { useDispatch, useSelector  } from 'react-redux'
import { addAction } from '../redux/actions'

import { LISTDATA } from '../shared/list'


// 함수의 리턴 값이 JSX.Element면 React 컴포넌트가 된다
// JSX를 쓰려면 import React from 'react'; 필요
// Navigator로 화면을 이동할 때(여기서는 Details로 이동할때)
// 컴포넌트 속성으로 route, navigation 전달되고 모두 사용
const Details = ( { route, navigation }) => {
  // navigation.navigate("스크린이름", 매개변수)
  console.log("---Details.js");
  console.log('test: ', route.params); // navigate로 넘어온 매개변수
  // console.log(navigation);

  // const id = route.params.id; 와 같은 구조, 새로 만드는 변수명과 route.params에서 뽑아내는 속성명이 같음
  const { id } = route.params;
  // 필터결과: 1개의 객체가 들어있는 객체array. 길이가 1인 배열    중에서 첫번재 요소[0]
  const item = LISTDATA.filter( item => item.id == id)[0]; 


  const dispatch = useDispatch();

  const actions = useSelector(state => state.actions);
  const isExistedAction = actions.filter(item => item.id == id).length > 0 ? true : false;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
          <Card.Image source={{uri: item.image}} />
        <Card.Divider/>
        <Text style={{marginBottom: 10}}>
            {item.description}
        </Text>
        {/* {
          isExistedAction 
            ?
            <Button
              onPress={()=>{dispatch(addAction(id))}}
              icon={<Icon name='close' type='ionicon' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"gray"}}
              title='REMOVE' 
            /> 
            :
            <Button
              onPress={()=>{dispatch(addAction(item))}}
              icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"tomato"}}
              title='ACTION' 
            />    
        } */}
        
        
        <Button
          onPress={()=>{dispatch(addAction(item))}}
          // dispatch는 action creator를 호출 
          // -> action creator는 action(type, payload)을 생성하여 리턴 
          // -> dispatch는 action을 받아, 
          // state로 부터 받은 현재state와 함께 Reducer로 넘겨줌
          // icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
          icon={<Icon name='sc-telegram'type='evilicon' color='#517fa4' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"tomato"}}
          title='ACTION' />



      </Card>


      {/* <Text>Details</Text> */}
    </View>
  )
}
export default Details;