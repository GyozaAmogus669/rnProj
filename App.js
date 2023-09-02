import {Text, View } from "react-native";
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './Screens/HomeScreen'
import Details from './Screens/DetailScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={Home} options={{ title: 'Overview'}} />
        <Stack.Screen name='Detail' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
