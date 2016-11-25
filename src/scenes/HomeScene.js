import React, { Component, PropTypes } from 'react';
import {
   View,
   Text,
   Button,
   StyleSheet
} from 'react-native';
import KerKerContainer from '../components/KerKerContainer.js';
import NextScene from './NextScene.js'
import I18n from '../i18n/I18n.config.js'

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
          {I18n.t('home_welcome')}
        </Text>
        <KerKerContainer/>
        <Text style={styles.instructions}>
          {I18n.t('home_instruction_one')}
          {'\n'}
          {I18n.t('home_instruction_two')}
        </Text>
        <Button title={I18n.t('router_next')}  onPress={ this.nextPage }/>
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
