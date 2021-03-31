
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Pressable
} from 'react-native';
import PersonDetail from '../../components/PersonDetail';
const url = 'http://api.randomuser.me/portraits/women/46.jpg'
const RegisterScreen = () => {
    const { goBack, navigate } = useNavigation();
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* <Pressable onPress={() => { navigate('AppStack') }}>
                    <Text>This is register screen</Text>
                </Pressable> */}
                <PersonDetail uri={url} />
            </SafeAreaView>
        </>
    );
};


export default RegisterScreen;
