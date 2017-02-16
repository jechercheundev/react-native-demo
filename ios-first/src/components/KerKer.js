import React, { PropTypes, Component }  from 'react'
import {
  StyleSheet,
  Text,
  Button,
  View,
  NativeEventEmitter,
  NativeModules
} from 'react-native';
const { KerKerNative } = NativeModules;


class KerKer extends React.Component {

  componentWillMount() {
    this.KerKerNativeEmitter = new NativeEventEmitter(KerKerNative);
    this.subscription = this.KerKerNativeEmitter.addListener(
      'KerKerIncrement',
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
            KerKerNative.output('kerker number is : ' + kerker)
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
