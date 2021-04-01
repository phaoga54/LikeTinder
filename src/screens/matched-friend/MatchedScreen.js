
import React from 'react';
import { useState, useEffect } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    StatusBar,
    Text,
    View,
} from 'react-native';
import Header from '../../components/Header';
import { getListFavourite, saveListFavourite } from '../../services';
import { useIsFocused } from '@react-navigation/native';
const { width } = Dimensions.get('window')
const MatchedScreen = () => {
    const [arrFavourite, setArrFavourite] = useState([])
    const isFocus = useIsFocused()
    useEffect(() => {
        const getFavourited = async () => {
            let arr = await getListFavourite()
            setArrFavourite(arr || [])
        }
        if (isFocus) getFavourited()
    }, [isFocus])
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                <Header title="Favourited People" />
                <FlatList
                    data={arrFavourite}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => {
                        const { first, last, title } = item.name || ''
                        const { street, city } = item.location || ''
                        return (
                            <View
                                style={{ width: width - 40, flexDirection: 'row', marginVertical: 5, backgroundColor: '#bfbfbf', padding: 10, borderRadius: 5 }}
                            >
                                <Image style={{ width: 60, height: 60, borderRadius: 30 }}
                                    source={{ uri: item.picture }}
                                />
                                <View style={{ marginLeft: 10 }}>
                                    <Text>Name: {title} {first} {last}</Text>
                                    <Text>Location: {street}, {city}</Text>
                                    <Text>Number: {item.phone || '000'}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </SafeAreaView>
        </>
    );
};


export default MatchedScreen;
