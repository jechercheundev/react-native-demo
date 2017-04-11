

import React, { PropTypes, Component }  from 'react'
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { DeviceEventEmitter } from 'react-native';
import Mixi from '../mixi.js'

class KerKer extends React.Component {


  componentWillMount() {
    console.log("listening to : " + Mixi.kerkerEvent)
    DeviceEventEmitter.addListener(Mixi.kerkerEvent, (e: Event) => {
      this.props.onKerKerPress();
    });
  }

  renderToast() {
    if (this.props.toastEnabled) {
      return (
        <Button
          title="Toast !"
          onPress = {this.props.onToastPress}
          />
      )
    } else {
      return null;
    }
  }

  render() {
    console.log('kerker render - kerkerTime = ' + this.props.kerkerTime)
    const ker = '💖';
    let kerker = '';
    for(let i = 0; i < this.props.kerkerTime; i++) {
      kerker = kerker + ker;
    }


    return (
      <View >
        <Text onPress = {() => {
            console.log('press')
            this.props.onKerKerPress()
          }} >
          #Kerker { kerker }
        </Text>
        {this.renderToast()}
      </View>
    )
  }
}

KerKer.propTypes = {
  onKerKerPress: PropTypes.func.isRequired,
  kerkerTime : PropTypes.number
}

KerKer.defaultProps = {
  kerkerTime: 2
};

export default KerKer;
