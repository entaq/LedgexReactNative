'use strict';

var React = require('react-native');
var {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    } = React;

var LedgexList = require('./LedgexList');

var LedgexHome = React.createClass({
    getInitialState: function() {
        return {
            selectedTab: 'contacts',
        };
    },

    _renderContent: function(content: string) {
    return (
        <LedgexList content={content} auth_headers={this.props.auth_headers}/>
    );
},

render: function() {
    return (
        <TabBarIOS
            tintColor="white"
            barTintColor="darkslateblue">
            <TabBarIOS.Item
                title="Contacts"
                icon={require('./Contacts-35.png')}
                selected={this.state.selectedTab === 'contacts'}
                onPress={() => {
            this.setState({
              selectedTab: 'contacts',
            });
          }}>
                {this._renderContent('investors')}
            </TabBarIOS.Item>
            <TabBarIOS.Item
                icon={require('./Briefcase-35.png')}
                title="Investors"
                badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                selected={this.state.selectedTab === 'investors'}
                onPress={() => {
            this.setState({
              selectedTab: 'investors',
            });
          }}>
                {this._renderContent('investors')}
            </TabBarIOS.Item>
            <TabBarIOS.Item
                icon={require('./Open-Folder-35.png')}
                title="Acccount Balances"
                selected={this.state.selectedTab === 'balances'}
                onPress={() => {
            this.setState({
              selectedTab: 'balances',
            });
          }}>
                {this._renderContent('balances')}
            </TabBarIOS.Item>
        </TabBarIOS>
    );
},

});

var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});

module.exports = LedgexHome;
