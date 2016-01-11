'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Alert
} from 'react-native';

var LedgexButton = require('./LedgexButton');

class LedgexLogin extends Component {
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
                           onChangeText={(text) => this.setState({email: text})}
                           selectTextOnFocus={true}
                           autoFocus={true}
                />
                <TextInput style={styles.login_input}
                           placeholder='Password'
                           onChangeText={(text) => this.setState({password: text})}
                           password={true}
                           selectTextOnFocus={true}
                />
                <LedgexButton onPress={()=>this.login()}>Login
                </LedgexButton>
            </View>
        );
    }
    login() {
        var params = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=password&username='+
            this.state.email+'&password='+this.state.password
        }
        fetch('https://test.ledgex.com/token',params)
            .then((response) => response.json())
            .then((responseData) => {

                if (responseData.error) {
                    Alert.alert('Error',responseData.error_description)
                } else {
                    var auth_headers = {
                        'tenant_id': responseData.default_tenant_identifier,
                        'Authorization': 'Bearer ' + responseData.access_token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                    this.props.navigator.push({ id: 'home', auth_headers: auth_headers });
                }
            })
            .done();
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

module.exports = LedgexLogin;
