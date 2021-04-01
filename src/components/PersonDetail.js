/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions, Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get("window");
const CONTAINER_HEIGHT = width * 0.8
const COVER_HEIGHT = CONTAINER_HEIGHT * 0.3
const IMAGE_SIZE = CONTAINER_HEIGHT / 3 + 10
const ICON_SIZE = 35
const ICON_MARGIN = 7

const ICONS = ['user', 'calendar', 'map', 'phone', 'lock']
const FIXED_TEXT = ['My name is', 'Joined at', 'My address is', 'My phone number is', 'Locked Infomation']
const PersonDetail = ({
    email, phone, userLocation, registered,
    userName, picture
}) => {
    const [left, setLeft] = useState(new Animated.Value(2 * (ICON_SIZE + ICON_MARGIN)))
    const [selectedLabel, setSelectedLabel] = useState('map')
    const [selectedIndex, setSelectedIndex] = useState(2)
    const [arrData, setArrData] = useState([])
    const selectIcon = (name, index) => {
        moveTopLine(index)
        setSelectedLabel(name)
        setSelectedIndex(index)
    }
    const moveTopLine = (index) => {
        let destination = index * (ICON_SIZE + ICON_MARGIN)
        let time = Math.abs(index - selectedIndex) * 200
        Animated.timing(left, {
            toValue: destination,
            duration: time,
            useNativeDriver: true
        }).start()
    }
    useEffect(() => {
        const { first, last, title } = userName || ''
        const { street } = userLocation || ''
        let arr = [`${title} ${first} ${last}`, registered, street, phone, 'Private Infomation']
        setArrData(arr)
    }, [email])
    return (
        <View
            style={styles.container}>
            <View style={styles.coverContainer} />
            <View style={styles.infoContainer}>
                <Text style={{ fontSize: 18, color: '#9b9b9b' }}>{FIXED_TEXT[selectedIndex]}</Text>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>{arrData[selectedIndex]}</Text>
                <View style={styles.infomation}>
                    <Animated.View style={[styles.topLine, { transform: [{ translateX: left }] }]} />
                    {ICONS.map((name, index) => (
                        <TouchableOpacity style={styles.iconContainer}
                            onPress={() => { selectIcon(name, index) }}
                            key={name}
                        >
                            <Icon name={name} size={30} color={selectedLabel == name ? "#92b959" : '#dadada'} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={{
                width: IMAGE_SIZE, height: IMAGE_SIZE,
                position: 'absolute', top: COVER_HEIGHT * 1 / 3,
                justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',
                borderColor: '#cdcdcd', borderWidth: 1, borderRadius: 100
            }}>

                <Image style={{
                    width: IMAGE_SIZE - 10, height: IMAGE_SIZE - 10,
                    borderRadius: 50,
                }}
                    source={{ uri: picture }}
                    resizeMode={'contain'}
                />
            </View>
        </View>
    );
};
export default PersonDetail;
const styles = StyleSheet.create({
    topLine: {
        width: 35, height: 2,
        backgroundColor: '#92b959', position: 'absolute', top: 45, left: 0
    },
    infomation: {
        flexDirection: 'row', width: 35 * 5 + 4 * ICON_MARGIN,
        justifyContent: 'space-between',
        paddingTop: 50
    },
    infoContainer: {
        width: '100%', height: '100%',
        marginTop: IMAGE_SIZE * 0.5 + 30, alignItems: 'center',
    },
    coverContainer: {
        width: '100%',
        height: COVER_HEIGHT,
        borderBottomWidth: 1, borderColor: '#cdcdcd',
        backgroundColor: "#f9f9f9"
    },
    container: {
        height: 400, borderRadius: 5,
        width: CONTAINER_HEIGHT, alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'white'
    },
    iconContainer: {
        width: ICON_SIZE, height: ICON_SIZE, justifyContent: 'center', alignItems: 'center'
    }
});
