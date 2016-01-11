'use strict';

var React = require('react-native');
var {
    ListView,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    ActivityIndicatorIOS,
    PixelRatio
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
            headers: this.props.auth_headers,
            method: 'POST'
        };
        switch(this.props.content){
            case 'contacts':
                params.body = 'EntityId=5&ViewId=9&page=1&pageSize=50';
                break;
            case 'investors':
                params.body = 'EntityId=10&ViewId=19&page=1&pageSize=50';
                break;
            case 'balances':
                params.body = 'EntityId=45&ViewId=148&page=1&pageSize=50';
                break;
        }
        fetch('https://test.ledgex.com/api/list/GetList',params)
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
                    dataSource: this.getDataSource(responseData.Data),
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
                renderHeader={this._renderHeader}
                customContent={this.props.content}
            />;
        return (
            content
        );
    },

    _renderHeader: function() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#B5B5B5">
                <Text style={styles.buttonText}>{this.props.content}</Text>
            </TouchableHighlight>
        );
    },

    _renderRow: function(rowData: string, sectionID: number, rowID: number) {
        var tableRow;

        switch(this.props.content){
            case 'contacts':
                tableRow = <Text style={styles.text}>{rowData.LedgexName}</Text>;
                break;
            case 'investors':
                 tableRow = <Text style={styles.text}>{rowData.Name}</Text>;
                break;
            case 'balances':
                tableRow = <Text style={styles.text}>{rowData.AccountCDDisplayText}</Text>;
                break;
        }

        return (
        <TouchableHighlight onPress={() => this._pressRow(rowData)}>
                <View>
                    <View style={styles.row}>
                            {tableRow}
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    },

    _pressRow: function(rowData: string) {
        this.props.navigator.push({id:'form', data:rowData})
    },
});

var LoadingOrEmptyCell = React.createClass({
    render: function() {
        return (
            <View style={[styles.centering, {paddingTop: 40}]}>
                <ActivityIndicatorIOS
                    style={{height: 40}}
                />
                <Text style={{}}>Loading</Text>
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

module.exports = LedgexList;