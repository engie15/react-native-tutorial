import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import MainScreen from './screens/MainScreen';


import store from './client/store';

export default class App extends Component {
  render() {
    const MainNavigator = createStackNavigator({
      Main: { screen: MainScreen }
    });

    return (
      //Have yet to connect any data to redux and the state of the components.  TBC.
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}