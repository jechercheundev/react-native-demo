

import React, { PropTypes, Component }  from 'react'
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';


class KerKer extends React.Component {



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
        <Button
          title="Toast !"
          onPress = {this.props.onToastPress}
          />
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
