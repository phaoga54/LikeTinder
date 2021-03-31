import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RegisterScreen from '../screens/register/RegisterScreen';
const Stack = createStackNavigator();
const RegisterStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                swipeEnabled: false,
                gestureEnabled: false,
                ...TransitionPresets.SlideFromRightIOS,
            }}>
            <Stack.Screen
                name={'RegisterScreen'}

                component={RegisterScreen}
            />
        </Stack.Navigator>
    );
};

export default RegisterStack;
