import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatchedScreen from '../screens/matched-friend/MatchedScreen';
import { View } from 'react-native';
import MatchFriendScreen from '../screens/match-friend/MatchFriendScreen';
import CustomTab from '../components/CustomTab';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomTab {...props} />}
            initialRouteName={'MatchedFriend'}>
            <Tab.Screen
                name={'MatchedFriend'}
                options={{
                    iconActive: <View style={{ width: 30, height: 30, borderColor: 'red' }} />,
                    iconInActive: <View style={{ width: 30, height: 30, borderColor: 'gray' }} />,
                    title: 'Search',
                    tabBarVisible: false
                }}
                component={MatchFriendScreen}
            />
            <Tab.Screen
                name={'MatchedScreen'}
                options={{
                    iconActive: <View style={{ width: 30, borderRadius: 15, height: 30, borderColor: 'red' }} />,
                    iconInActive: <View style={{ width: 30, borderRadius: 15, height: 30, borderColor: 'gray' }} />,
                    title: 'MatchedFriend',
                    tabBarVisible: false
                }}
                component={MatchedScreen}
            />
        </Tab.Navigator>
    )
};

const StackNavigator = () => {

    return (
        <Stack.Navigator

            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                ...TransitionPresets.SlideFromRightIOS,
            }}>
            <Stack.Screen name={'Drawer'} component={TabNavigator} />
        </Stack.Navigator>
    )
};

export default StackNavigator;
