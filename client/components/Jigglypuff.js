import React, { Component } from 'react'; 
import { View, Image,  Dimensions } from 'react-native';
import { Text, Button } from 'react-native-elements';


const SCREEN_WIDTH = Dimensions.get('window').width;

class Jigglypuff extends Component {
    
    
    render() {
        const {
            containerStyle,
            buttonStyle,
            selectedTextStyle
        } = styles;

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/img/jigglypuff.png')} style={{width: 60, height: 60}} />
                <Text h3>JigglyPuff</Text>
                <Button
                    title='PUSH PLAY'
                    containerStyle={containerStyle}
                    buttonStyle={buttonStyle}
                    selectedTextStyle={selectedTextStyle}
                    resizeMode="cover"
                    repeat={true}
                    playInBackground={false}
                    playWhenInactive={false}
                    ignoreSilentSwitch={"ignore"}
                >
                </Button>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        height: 40,
        width: SCREEN_WIDTH * 0.9
    },
    buttonStyle: {
        backgroundColor: 'pink'
    },
    selectedTextStyle: {
        color: 'orange',
        fontWeight: '900'
    }
}

export default Jigglypuff