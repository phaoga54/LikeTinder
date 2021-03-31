
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
    StatusBar, Pressable
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { clamp, withBouncing } from "react-native-redash";
import Animated from 'react-native-reanimated';

import PersonDetail from '../../components/PersonDetail';
const url = 'http://api.randomuser.me/portraits/women/92.jpg'
const RegisterScreen = () => {
    const { goBack, navigate } = useNavigation();
    const [user, setUser] = useState({})

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const getNewPerson = async () => {
        let response = await fetch(
            'https://randomuser.me/api/0.4/?randomapi', { method: 'get' }
        );
        let json = await response.json();
        setUser(json.results[0].user)
    }
    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            // ctx.offsetX = translateX.value;
            // ctx.offsetY = translateY.value;
        },
        onActive: (event, ctx) => {
            // translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
            // translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
            console.log('logged by phuognn ctx.offsetX: ', event.translationX);
            console.log('logged by phuognn ctx.offsetY: ', event.translationY);
        },
        onEnd: ({ velocityX, velocityY }) => {
            console.log('logged by phuognn velocityX: ', velocityX);
            // translateX.value = withBouncing(
            //     withDecay({
            //         velocity: velocityX,
            //     }),
            //     0,
            //     boundX
            // );
            // translateY.value = withBouncing(
            //     withDecay({
            //         velocity: velocityY,
            //     }),
            //     0,
            //     boundY
            // );
        },
    })

    const style = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
            ],
        };
    });
    useEffect(() => {
        getNewPerson()
    }, [])
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <PanGestureHandler onGestureEvent={onGestureEvent}>
                    <Animated.View>
                        <PersonDetail  {...user} userName={user?.name || {}} userLocation={user?.location || {}} />
                    </Animated.View>
                </PanGestureHandler>
            </SafeAreaView>
        </>
    );
};


export default RegisterScreen;
