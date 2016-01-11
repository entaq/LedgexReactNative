'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    DrawerLayoutAndroid,
    Image
    } = React;

var LedgexList = require('./LedgexList');

var LedgexHome = React.createClass({
    getInitialState: function() {
        return {
            content: 'contacts'
        };
    },


render: function() {
    var navigationView = (
        <View style={{backgroundColor: '#F6F6F6'}}>
        <TouchableHighlight onPress={()=>this.setState({content: 'balances'})}>
            <View>
                <View style={styles.row}>
                    <Image style={styles.thumb} source={require('./Contacts-35.png')} />
                    <Text style={styles.text}>
                        Contacts
                    </Text>
                </View>
                <View style={styles.separator} />
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>this.setState({content: 'investors'})}>
            <View>
                <View style={styles.row}>
                    <Image style={styles.thumb} source={require('./Briefcase-35.png')} />
                    <Text style={styles.text}>
                        Investors
                    </Text>
                </View>
                <View style={styles.separator} />
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>this.setState({content: 'balances'})}>
            <View>
                <View style={styles.row}>
                    <Image style={styles.thumb} source={require('./Open-Folder-35.png')} />
                    <Text style={styles.text}>
                        Account Balances
                    </Text>
                </View>
                <View style={styles.separator} />
            </View>
        </TouchableHighlight>
        </View>
    );
    return (
        <DrawerLayoutAndroid
            drawerWidth={250}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            <LedgexList content={this.state.content} auth_headers={this.props.auth_headers}/>
        </DrawerLayoutAndroid>
    );

},

});

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    thumb: {
        width: 35,
        height: 35,
        padding: 10,
    },
    text: {
        flex: 1,
    },
});

module.exports = LedgexHome;
