import React from "react";
import {
  View,
  Text
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from "./screens/SingInScreen";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

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