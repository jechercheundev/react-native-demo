import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Navigator
} from 'react-native';
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import HomeScene from './scenes/HomeScene.js'
import Router from 'react-native-simple-router';
import I18n from './i18n/I18n.config.js'

const firstRoute = {
  name: 'Welcome !',
  component: HomeScene,
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec',
  },
});


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router
          firstRoute={firstRoute}
          headerStyle={styles.header}
        />
      </Provider>
    );
  }
}

export default App
