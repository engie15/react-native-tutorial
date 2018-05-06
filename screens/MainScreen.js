import React, { Component } from 'react';
import { View, Platform, Text } from 'react-native';
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
        headerLeft: <View><Text>I</Text></View>
    })

    render() {
        return (
        <View style={{ flex: 1, backgroundColor: '#ddd'}}>
        <Jigglypuff />
        </View>
        );
    }
}

export default MainScreen