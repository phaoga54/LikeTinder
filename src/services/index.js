import AsyncStorage from '@react-native-async-storage/async-storage';
export const getRandomPerson = async () => {
    let response = await fetch(
        `https://randomuser.me/api/0.4/?randomapi${global.gender && '&gender=' + gender}`, { method: 'get' }
    );
    let json = await response.json();
    return json.results[0].user
}

export const saveListFavourite = async (arrayFavourited) => {

    try {
        const stringArr = JSON.stringify(arrayFavourited || [])
        await AsyncStorage.setItem('@Favourited', stringArr)
    } catch (error) {
        console.log('error: ', error)
        return false;
    }
}
export const getListFavourite = async () => {
    console.log('--------------------')
    try {
        let stringArr = await AsyncStorage.getItem('@Favourited')
        let arr = JSON.parse(stringArr)
        return arr
    } catch (error) {
        return false;
    }

}