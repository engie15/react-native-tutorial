import React, { Component } from 'react';
import { View, Platform, Image } from 'react-native';

import icon from '../assets/icons/pure-icon.png'

import { STATUS_BAR_HEIGHT } from '../constants';
import Jigglypuff from '../client/components/Jigglypuff'

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

    render() {
        return (
        <View style={{ flex: 1, backgroundColor: '#ddd'}}>
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