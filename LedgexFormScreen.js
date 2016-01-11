'use strict';
import React, {
    Component,
    Text
} from 'react-native';


class LedgexFormScreen extends Component {
    render() {
        return (
            <Text>DrillDownSuccess {this.props.data.LedgexName}</Text>
        )
    }
}

module.exports = LedgexFormScreen;
