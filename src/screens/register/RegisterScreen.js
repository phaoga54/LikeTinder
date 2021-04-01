
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Pressable, ActivityIndicator, TouchableOpacity
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Easing, runOnJS, useAnimatedGestureHandler, useAnimatedReaction, useAnimatedStyle, useSharedValue, withDecay, withTiming } from 'react-native-reanimated';
import { clamp, withBouncing } from "react-native-redash";
import Animated from 'react-native-reanimated';

import PersonDetail from '../../components/PersonDetail';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { getRandomPerson } from '../../services';
const url = 'http://api.randomuser.me/portraits/women/92.jpg'
const GENDERS = ['Male', 'Female', 'Both']
const RegisterScreen = () => {
    const { goBack, navigate } = useNavigation();
    const [selected, setSelected] = useState('Both')

    useEffect(() => {
    }, [])
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>What gender are you looking for?</Text>
                {GENDERS.map((gender) => (
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, width: 80 }}
                        key={gender}
                        onPress={() => { setSelected(gender) }}
                    >
                        <View style={styles.radioContainer} >
                            {selected == gender && <View style={styles.innerRadio} />}
                        </View>
                        <Text style={{ marginLeft: 10 }}>{gender}</Text>
                    </TouchableOpacity>
                ))}
                <Pressable style={{ marginTop: 50 }}
                    onPress={() => {
                        global.gender = selected
                        navigate('AppStack')
                    }}
                >
                    <Text>
                        Done
                    </Text>
                </Pressable>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    innerRadio: { width: '100%', height: '100%', backgroundColor: '#92b959', borderRadius: 100 },
    radioContainer: { width: 22, height: 22, borderRadius: 30, borderWidth: 1, borderColor: '#92b959', padding: 2, justifyContent: 'center', alignItems: 'center' }
})
export default RegisterScreen;
