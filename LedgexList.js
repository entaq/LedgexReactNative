'use strict';

var React = require('react-native');
var {
    ListView,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    ActivityIndicatorIOS,
    } = React;

var LedgexList = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            isLoading: true,
            dataSource: ds,
        };
    },

    componentDidMount: function() {
        var params = {
            headers : this.props.auth_headers,
        }
        fetch('https://test.ledgex.com/api/Analyst/GetAll',params)
            .then((response) => response.json())
            .catch((error) => {
                this.setState({
                    dataSource: this.getDataSource([]),
                    isLoading: false,
                });
            })
            .then((responseData) => {
                this.setState({
                    isLoading: false,
                    dataSource: this.getDataSource(responseData),
                });
            })
            .done();
    },

    getDataSource: function(results: Array<any>): ListView.DataSource {
        return this.state.dataSource.cloneWithRows(results);
    },

    render: function() {
        var content = this.state.dataSource.getRowCount() === 0 ?
            <LoadingOrEmptyCell/>
            :
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        return (
            content
        );
    },

    _renderRow: function(rowData: string, sectionID: number, rowID: number) {
        return (
            <TouchableHighlight onPress={() => this._pressRow(rowID)}>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            {rowData.FirstName + ' ' + rowData.LastName}
                        </Text>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    },

    _pressRow: function(rowID: number) {

    },
});

var LoadingOrEmptyCell = React.createClass({
    render: function() {
        return (
            <View style={{}}>
                <ActivityIndicatorIOS
                    style={[styles.centering, {height: 40}]}
                />
                <Text style={{}}>Empty Cell</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    text: {
        flex: 1,
    },
});

module.exports = LedgexList;