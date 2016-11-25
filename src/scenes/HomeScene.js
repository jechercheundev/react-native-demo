import React, { Component, PropTypes } from 'react';
import {
   View,
   Text,
   Button,
   StyleSheet
} from 'react-native';
import KerKerContainer from '../components/KerKerContainer.js';
import NextScene from './NextScene.js'

export default class HomeScene extends Component {

  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this)
  }


  nextPage() {
     this.props.toRoute({
       name: "About #Kerker",
       component: NextScene
     });
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <KerKerContainer/>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button title="Next" onPress={ this.nextPage }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
