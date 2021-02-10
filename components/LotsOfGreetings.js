import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

//props(객체임) = {name:'Rexxar'}
//props 객체에서 name속성만 빼서
// const {name } = props -> name = 'Rexxar'

//const Greeting = (props) => {
// const Greeting = (props) => {
//   return (
//     <View style={styles.center}>
//                   {/* props.속성명 */}
//       <Text>Hello {props.name}!</Text>
//     </View>
//   );
// }


// constr { name } = props
//        ㅣ
//        v   위는 아래와 같다
// const name = props.name

const Greeting = ({ name }) => {
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

export default LotsOfGreetings;