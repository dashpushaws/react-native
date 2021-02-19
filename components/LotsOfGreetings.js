import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

// props = {name:'Rexxar'}, props는 객체
// const { name } = props -> name = 'Rexxar'
// props 객체에서 name속성만 빼서 name이란 변수에 넣음
// props의 속성명, 새로 만든 변수명  같아야 한다

// const { name } = props
//        =
// const name = props.name

// 2. 속성값 바로 이용하기
const Greeting = ({ name }) => { // const { name } = props 되는 부분
  return (
    <View style={styles.center}>
      <Text>Hello {name}!</Text>
    </View>
  );
}
const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
                  {/* 속성명={값} */}
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </View>
  );
}




// 1. 객체(props) 이용하기
// const Greeting = (xx) => { 
//   // 2. xx = {name:'Rexxar', game:'xiva'}, 여기 매개변수가 JSX에서 속성들과 연결되있음
//   return (
//     <View style={styles.center}>
//       <Text>Hello {xx.name} {xx.game}!</Text>  
//       {/* 3. xx.name, 이런식으로 접근가능 */}
//     </View>
//   );
// }
// const LotsOfGreetings = () => {
//   return (
//     <View style={[styles.center, {top: 50}]}>
//       {/* 1. Greeting 의 name, game의 속성들에 접근하려면 */}
//       <Greeting name='Rexxar' game='xiva' />  
//     </View>
//   );
// }


export default LotsOfGreetings;