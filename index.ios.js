/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';

var LedgexButton = require('./LedgexButton');

class Ledgex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./ledgex.png')}
          style={styles.logo}
          />
        <Text style={styles.welcome}>
          Welcome to Ledgex, please sign in
        </Text>
        <TextInput style={styles.login_input}
          placeholder='Email'
        />
        <TextInput style={styles.login_input}
          placeholder='Password'
        />
        <LedgexButton>Login</LedgexButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    width: 180,
    height: 180
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  login_input : {
    margin: 7,
    padding: 7,
    borderRadius: 8,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

AppRegistry.registerComponent('Ledgex', () => Ledgex);
