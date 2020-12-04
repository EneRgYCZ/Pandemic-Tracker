import React from "react";
import {
  View,
  Text
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from "./screens/SingInScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode = "none">
        <Stack.Screen name="Sign" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;