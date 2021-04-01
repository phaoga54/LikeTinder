
import { useIsFocused, useNavigation } from '@react-navigation/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Pressable, ActivityIndicator
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Easing, runOnJS, useAnimatedGestureHandler, useAnimatedReaction, useAnimatedStyle, useSharedValue, withDecay, withTiming } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

import PersonDetail from '../../components/PersonDetail';
import { getListFavourite, getRandomPerson, saveListFavourite } from '../../services';
import Header from '../../components/Header';

const url = 'http://api.randomuser.me/portraits/women/92.jpg'

const MatchFriendScreen = (props) => {
    const { goBack, navigate } = useNavigation();
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [arrFavourite, setArrFavourite] = useState([])
    const translateX = useSharedValue(0);
    const isFocused = useIsFocused()
    const getNewPerson = async () => {
        setIsLoading(true)
        let user = await getRandomPerson()
        setUser(user)
        setIsLoading(false)
    }
    const swipeRight = () => {
        let arr = [...arrFavourite]
        arr.push(user)
        setArrFavourite(arr)
        getNewPerson()
    }

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.offsetX = translateX.value;
            ctx.firstPosition = translateX.value;
        },
        onActive: (event, ctx) => {
            translateX.value = ctx.offsetX + event.translationX
        },
        onEnd: ({ velocityX, velocityY }) => {
            if (translateX.value < -10) {
                translateX.value = withTiming(-400, {
                    duration: 100,
                    easing: Easing.bezier(0.25, 0.1, 0.25, 1),

                })
                // getNewPerson()
            } else {

                translateX.value = withTiming(400, {
                    duration: 100,
                    easing: Easing.bezier(0.25, 0.1, 0.25, 1),

                })
            }
        },
    })

    const style = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
            ],
        };
    });

    useAnimatedReaction(
        () => translateX.value,
        () => { // data holds what was returned from the first worklet's execution
            if (translateX.value == -400) {
                translateX.value = 0
                runOnJS(getNewPerson)()
            } else if (translateX.value == 400) {
                runOnJS(swipeRight)()
                translateX.value = 0
            }
        }
    );

    useEffect(() => {
        const getFavourited = async () => {
            let arr = await getListFavourite()
            setArrFavourite(arr || [])
        }
        if (isFocused) getFavourited()
        if (!isFocused) saveListFavourite(arrFavourite)
    }, [isFocused])

    useEffect(() => {
        getNewPerson()
    }, [])
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ position: 'absolute', top: 0 }}><Header title='Search Friend' /></View>
                <PanGestureHandler onGestureEvent={onGestureEvent}>
                    <Animated.View {...{ style }}>
                        {isLoading ?
                            <ActivityIndicator size="small" color="#0000ff" /> :
                            <PersonDetail  {...user} userName={user?.name || {}}
                                userLocation={user?.location || {}} />
                        }

                    </Animated.View>
                </PanGestureHandler>
            </SafeAreaView>
        </>
    );
};


export default MatchFriendScreen;
