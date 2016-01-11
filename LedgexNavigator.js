'use strict';

var React = require('react-native');
var {
  Navigator,
} = React;

var LedgexHome = require('./LedgexHome');
var LedgexLogin = require('./LedgexLogin');

var LedgexNavigator = React.createClass({
  renderScene: function(route, nav) {
    switch (route.id) {
        case 'home':
            return (
                <LedgexHome navigator={nav} auth_headers={route.auth_headers}/>
            );
      default:
          return (
              <LedgexLogin navigator={nav}/>
          );
    }
  },

  render: function() {
    return (
      <Navigator
        ref={this._setNavigatorRef}
        style={{flex: 1}}
        initialRoute={{  }}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
      />
    );
  },

  _setNavigatorRef: function(navigator) {
    if (navigator !== this._navigator) {
      this._navigator = navigator;
    }
  },
});

module.exports = LedgexNavigator;
