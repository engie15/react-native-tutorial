import React, { Component } from 'react';
import { View, Platform, Image } from 'react-native';
import Expo from 'expo'
import icon from '../assets/icons/pure-icon.png'

import { STATUS_BAR_HEIGHT } from '../constants';
import Jigglypuff from '../client/components/Jigglypuff';
import Login from '../client/components/Login';


// The below code is for cacheImages.  Not in use yet.
// const cacheImages = images => images.map(image => {
//     if (typeof image === 'string') return Image.prefect(image);

//     return Expo.Asset.fromModule(image).downloadAsync();
//     });

class MainScreen extends Component {
    static  navigationOptions = () => ({
        title: 'Jigglypuff',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54, 
            backgroundColor: 'pink'
        },
        headerTitleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: 'white'
        },
        headerLeft: (
            <Image
                source={icon}
                style={styles.imageStyle}
            />
        )
    });

state = {
    appIsReady: false
}

componentWillMount() {
    this._loadAssetsAsync();
}

async _loadAssetsAsync() {
    const imageAssets = cacheImages([icon]);  //you could place multiple images in here.
    await Promise.all([...imageAssets]);
    this.setState({appIsReady: true});
}

    render() {
        return (
        <View style={{ flex: 1, backgroundColor: '#ddd'}}>
        <Login />
        <Jigglypuff />
        </View>
        );
    }
}

const styles = {
    //you can adjust the styling here for ios and android devices depending on how it looks.
    imageStyle: {
        marginTop: 20,
        marginLeft: 10,
        width: 40,
        height: 40
    }
}

export default MainScreen