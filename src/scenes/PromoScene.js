import React, { Component, PropTypes } from 'react';
import {
   View,
   Text,
   Button,
   StyleSheet,
   Linking
} from 'react-native';
import KerKerContainer from '../components/KerKerContainer.js';

export default class PromoScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          JeChercheUnDev.fr aims to help developer to find jobs they love !
        </Text>
        <KerKerContainer/>
        <Text style={styles.instructions}>
          Visit JeChercheUnDev.fr to learn more !
        </Text>
        <Button title="Visit !" onPress={ () => {
          var url = "https://JeChercheUnDev.fr/dreamjob/dev_index.html";
          Linking.canOpenURL(url).then(supported => {
            if (!supported) {
              console.log('Can\'t handle url: ' + url);
            } else {
              return Linking.openURL(url);
            }
          }).catch(err => console.error('An error occurred', err));
        }}/>
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
