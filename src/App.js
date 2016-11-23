import {
  AppRegistry,
  Text,
  View,
  Navigator,
  Linking
} from 'react-native';
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import HomeScene from './scenes/HomeScene.js';
import NextScene from './scenes/NextScene.js';
import PromoScene from './scenes/PromoScene.js';


import KerKerContainer from './components/KerKerContainer.js'

class App extends Component {



  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{ title: 'Welcome', index: 0 }}
          renderScene={(route, navigator) => {

            switch(route.title) {
              case 'Welcome':
                return (<HomeScene
                  onForward={
                    () => {
                      navigator.push({
                        title: 'Next Scene',
                        index: 1
                      });
                    }
                  }
                  />);
                break;
              case 'Next Scene':
                return (<NextScene
                  onForward={
                    () => {
                      navigator.push({
                        title: 'Promo Scene',
                        index: 1
                      });
                    }
                  }
                  />);
                break;
              case 'Promo Scene':
                return (<PromoScene />);
                break;
              }
          }}
        />
      </Provider>
    );
  }
}

export default App
