'use strict';
import React, {
  AppRegistry,
  Component,
} from 'react-native';

var LedgexNavigator = require('./LedgexNavigator');

class Ledgex extends Component {
  render() {
    return (
      <LedgexNavigator/>
    )
  }
}

AppRegistry.registerComponent('Ledgex', () => Ledgex);