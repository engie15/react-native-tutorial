import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import store from './client/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text h1>Kia ora whanau!</Text>
          <Text>Soon to be Jigglypuff</Text>
          <Button raised
            icon={{name: 'cached'}}
            title="Button!" />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('App', () => MyApp);
