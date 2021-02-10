import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './components/Home'
import List from './components/List'
import Actions from './components/Actions'
import Details from './components/Details'

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title:"Home", headerTitleAlign:"center"}} />
      <HomeStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
    </HomeStack.Navigator>
  )
}
const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={List} options={{title:"List", headerTitleAlign:"center"}} />
      <ListStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
    </ListStack.Navigator>
  )
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){
      case 'Home': // focus가 있으면 'home', 아니면 home-outline
        iconName = focused
          ? 'home'
          : 'home-outline';
        break;
      case 'List':
        iconName = focused
          ? 'list'
          : 'list-outline'; 
        break;
      case 'Actions':
        iconName = focused
          ? 'checkmark'
          : 'checkmark-outline'; 
        break;
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const tabBarOptions= {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
}

export default function App() {
 
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            {/* Navigator 내부에 있는 component들은 매개변수로 navigation을 받을 수 있음 */}
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="List" component={ListStackScreen} />
          <Tab.Screen name="Actions" component={Actions} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}








// 컴포넌트 이용시 썼던 코드

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// // from 자바스크립트 파일명
// // from 디렉토리명 -> 디렉토리명만 쓰면 그 하위파일이 실행됨. 디렉토리/index.js

// // import HelloWorld from './components/HelloWorld'
// // import Counter from './components/Counter'
// // import LotsOfGreetings from './components/LotsOfGreetings'
// import SimpleList from './components/SimpleList'

// // App 컴포넌트 시작
// export default function App() {
//   // JSX: UI 템플릿을 작성, <View> ~ </View>가 렌더링 되는 부분
//   return (
//                   // 속성 ={값}
//                   // 속성={"문자열"}
//                   // 속성={{name:"sss", phone:"aaa"}}
//                   // 속성={객체변수}
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text> */}
//       {/* <HelloWrold></HelloWrold> */}
//       {/* <Counter></Counter> */}
//       {/* <LotsOfGreetings></LotsOfGreetings> */}
//       <SimpleList></SimpleList>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// // App 컴포넌트 끝

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });