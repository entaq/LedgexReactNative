'use strict';
import React, {
    Component,
    Text,
    StyleSheet,
    PixelRatio,
    View
} from 'react-native';


class LedgexFormScreen extends Component {
    render() {
        console.log(this.props.data)
        return (
        <View>
            <View style={[styles.centering, {paddingTop: 40}]}>
                <Text style={{fontSize: 25}}>{this.props.data.LedgexName}</Text>
                <Text style={{fontSize: 15}}>{this.props.data.CompanyDisplayText}</Text>
                <Text style={{fontSize: 15}}>{this.props.data.BusinessLocation}</Text>
                <View style={{height: 20}}/>
            </View>
            <View style={styles.row}>
                <Text style={{fontSize: 15}}>Phone: </Text>
                <Text style={{fontSize: 15,fontWeight:'bold'}}>{this.props.data.PhoneNumber}</Text>
            </View>
            <View style={styles.row}>
                <Text style={{fontSize: 15}}>Email: </Text>
                <Text style={{fontSize: 15,fontWeight:'bold'}}>{this.props.data.EmailAddress}</Text>
            </View>

        </View>
        )
    }
}


var styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        padding: 10,
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    text: {
        flex: 1,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 15,
        paddingTop: 40,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#CDCDCD',
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
    },
});

module.exports = LedgexFormScreen;
