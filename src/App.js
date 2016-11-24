import {
  AppRegistry,
  Text,
  View,
  Navigator
} from 'react-native';
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import router from './Router.js'


import KerKerContainer from './components/KerKerContainer.js'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={router.initialState}
          renderScene={router.renderScene}
        />
      </Provider>
    );
  }
}

export default App
