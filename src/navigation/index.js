import React, { useEffect, useState } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import StackNavigator from './AppStacks';
import RegisterStack from './RegisterStacks';

const Stack = createStackNavigator();
const AppContainer = ({ token }) => {
    return (
        <Stack.Navigator
            initialRouteName={'RegisterStack'}
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                ...TransitionPresets.SlideFromRightIOS,
            }}>
            <Stack.Screen name={'AppStack'} component={StackNavigator} />
            <Stack.Screen name={'RegisterStack'} component={RegisterStack} />
        </Stack.Navigator>
    );
};

export default AppContainer;
