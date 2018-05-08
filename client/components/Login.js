import React, { Component } from 'react';
import { View, Button, Alert, Text, TextInput } from 'react-native';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 20}} >
                <TextInput
                style={{height: 40}}
                placeholder="Type your username here!"
                onChangeText={(text) => this.setState({text})}
                />
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    }
}

export default Login

//Below code is an attempt using tcomb-form-native
// const Form = t.form.Form;

// const User = t.struct(
//     name: t.string,
//     password: t.string
// );

// const options = {
//     fields: {
//         name: {
//             error: 'Please enter your name here.'
//         },
//         password: {
//             error: 'Be sure to enter your password'
//         }
//     }
// };

// class Login extends Component {

//     handleSubmit = () => {
//         const value = this._form.getValue();
//         console.log('value:', value)
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Form 
//                 ref={c => this._form = c}
//                 type={User}
//                 options={options} 
//                 />
//                 <Button
//                 title="Login!"
//                 onPress={this.handleSubmit}
//                 />
//             </View>
//         )
//     }
// }