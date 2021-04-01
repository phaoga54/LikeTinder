
import React from 'react';
import { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window')
const Header = (props) => {
    return (
        <>
            <View style={{ width, height: 80, backgroundColor: '#92b959', justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>{props.title}</Text>
            </View>
        </>
    );
};


export default Header;
