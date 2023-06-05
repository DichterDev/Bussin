import Home from './components/01_Screens/01_Home/Home'
import Test from './components/01_Screens/03_Test/01_Test'
import Test2 from './components/01_Screens/03_Test/02_Test'
import Fahrplan from './components/01_Screens/03_Fahrplan/Fahrplan';
import Tracking from './components/01_Screens/02_Tracking/Tracking'

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}