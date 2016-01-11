'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    } = React;

class LedgexHome extends React.Component {
    render() {
        return (
            <Text style={styles.buttonText}>Success</Text>
        );
    }
}

var styles = StyleSheet.create({
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
    }
});

LedgexHome.external = true;

module.exports = LedgexHome;
