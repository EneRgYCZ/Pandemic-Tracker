import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from "./SingInScreen";
import RegistrationScreen from "./RegistrationScreen";

const Stack = createStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName="SigninScreen"
            screenOptions={{ gestureEnabled: true }}
        >
            <Stack.Screen
                name="SigninScreen"
                component={SignInScreen}
            />
            <Stack.Screen
                name="Registration"
                component={RegistrationScreen}
            />
        </Stack.Navigator>
    );
}

export default NavigationContainer(RootStack);