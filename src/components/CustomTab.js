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
const { height } = Dimensions.get("window");

const CustomTab = ({ state, descriptors, navigation }) => {
    return (
        <View
            style={[
                styles.viewbt,
                {
                    height: 60, justifyContent: 'center', alignItems: 'center'
                },
            ]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.title;
                const iconActive = options.iconActive;
                const isFocused = state.index === index;
                const iconInActive = options.iconInActive;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                return (
                    <TouchableOpacity
                        activeOpacity={1}
                        key={index}
                        onPress={onPress}
                        style={[styles.viewTab, { justifyContent: 'center', alignItems: 'center' }]}>
                        <Image
                            resizeMode="contain"
                            style={styles.iconTab}
                            source={isFocused ? iconActive : iconInActive}
                        />
                        <Text
                            style={[
                                styles.titleTab,
                                { color: isFocused ? '#2C856E' : '#B0B0B8' },
                            ]}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
export default CustomTab;
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
