/* eslint-disable react-native/no-inline-styles */
import React, { } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get("window");
const CONTAINER_HEIGHT = width * 0.8
const COVER_HEIGHT = CONTAINER_HEIGHT * 0.3
const IMAGE_SIZE = COVER_HEIGHT + 10
const PersonDetail = ({ uri }) => {
    return (
        <View
            style={[{
                borderWidth: 1, height: 400, borderRadius: 5,
                width: CONTAINER_HEIGHT, alignItems: 'center',
                overflow: 'hidden'
            }]}>
            <View style={{
                width: '100%',
                height: COVER_HEIGHT,
                borderBottomWidth: 1, borderColor: 'gray'
            }} />
            <View style={{
                width: '100%', height: '100%',
                marginTop: IMAGE_SIZE * 0.5 + 30, alignItems: 'center'
            }}>
                <Text>My Address is </Text>
                <Text>Address </Text>
                <View style={{
                    flexDirection: 'row', width: 35 * 5 + 4 * 7,
                    justifyContent: 'space-between',
                    paddingTop: 50
                }}>
                    <View style={{
                        width: 35, height: 2,
                        backgroundColor: 'green', position: 'absolute', top: 45, left: 0
                    }} />
                    <TouchableOpacity style={{ width: 35, height: 35, backgroundColor: 'red' }} />
                    <TouchableOpacity style={{ width: 35, height: 35, backgroundColor: 'blue' }} />
                    <TouchableOpacity style={{ width: 35, height: 35, backgroundColor: 'green' }} />
                    <TouchableOpacity style={{ width: 35, height: 35, backgroundColor: 'yellow' }} />
                    <TouchableOpacity style={{ width: 35, height: 35, backgroundColor: 'orange' }} />
                </View>
            </View>
            <View style={{
                width: IMAGE_SIZE, height: IMAGE_SIZE,
                position: 'absolute', top: COVER_HEIGHT / 2,
                justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',
                borderColor: 'gray', borderWidth: 1, borderRadius: 100
            }}>

                <Image style={{
                    width: IMAGE_SIZE - 10, height: IMAGE_SIZE - 10,
                    borderRadius: 50,
                }}
                    source={{ uri }}
                    resizeMode={'contain'}
                />
            </View>
        </View>
    );
};
export default PersonDetail;
const styles = StyleSheet.create({
    iconTab: {
        height: 30,
        width: 30,
    },
    titleTab: {
        fontSize: 10,
        marginTop: 5,
    },
    viewTab: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 8,
    },
    viewbt: {
        shadowOffset: {
            width: 0,
            height: 7,
        },
        elevation: 14,
        shadowRadius: 9.11,
        shadowOpacity: 0.41,
        shadowColor: '#000',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    viewBageNav: {
        position: 'absolute',
        backgroundColor: '#ED5F7D',
        width: 18,
        height: 18,
        borderRadius: 10,
        right: 20,
        top: 5,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
