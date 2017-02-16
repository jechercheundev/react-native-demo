import React, { PropTypes, Component }  from 'react'
import {
  StyleSheet,
  Text,
  Button,
  View,
  NativeEventEmitter,
  NativeModules
} from 'react-native';


class KerKer extends React.Component {

  componentWillMount() {
    console.log("ici")
    const { KerKerNative } = NativeModules;
    this.KerKerNativeEmitter = new NativeEventEmitter(KerKerNative);
    this.subscription = this.KerKerNativeEmitter.addListener(
      'EventKerKer',
      () => this.props.onKerKerPress()
    );

  }

  componentWillUnmount() {
    this.subscription.remove();
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
