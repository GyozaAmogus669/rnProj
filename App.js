import {Button,Text, View } from "react-native";
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import HomeScreen from './Screens/HomeScreen'
// import DetailsScreen from './Screens/DetailScreen'
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";

const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home" screenOptions={{
//         headerStyle:{
//             backgroundColor: '#db9ab2'
//         },
//         headerTintColor: '#ffff',
//         headerTitleStyle: {
//             fontWeight: 'bold'
//         }
//       }}>
//         <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Overview'}} />
//         <Stack.Screen name='Detail' component={DetailsScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle:{
            backgroundColor: '#db9ab2'
        },
        headerTintColor: '#ffff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
      }}>
        <Stack.Screen name='First' component={FirstPage} options={{ title: 'FirstPage'}} />
        <Stack.Screen name='Second' component={SecondPage} options={{ title: 'SecondPage'}} />
        <Stack.Screen name='Third' component={ThirdPage} options={{ title: 'ThirdPage'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
