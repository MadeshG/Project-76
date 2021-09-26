import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ISSLoaction from './Screens/ISSLocation';
import MeteorScreen from './Screens/MeteorScreen';
const stack=createStackNavigator()
function App(){
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ISS" component={ISSLocation}/>
        <Stack.Screen name="Meteors" component={MeteorScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;