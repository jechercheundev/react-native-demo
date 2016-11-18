import React, { PropTypes, Component }  from 'react'
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

class KerKer extends React.Component {

  state = {
    kerkerTime : this.props.kerkerTime
  }

  onPress() {
    console.log('Kerker !')
    this.setState({
            kerkerTime: (this.state.kerkerTime + 1) % 4
        });
  }

  render() {
    const ker = '💖';
    let kerker = '';
    for(let i = 0; i < this.state.kerkerTime; i++) {
      kerker = kerker + ker;
    }


    return (
      <View >
        <Text onPress = {this.onPress.bind(this)} >
          #Kerker { kerker }
        </Text>
      </View>
    )
  }
}


KerKer.defaultProps = {
  kerkerTime: 2
};

export default KerKer;
