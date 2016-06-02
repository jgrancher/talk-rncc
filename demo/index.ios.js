import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  ListView,
  View
} from 'react-native';
import HodorLoader from './Libraries/HodorLoader/HodorLoader';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const loadingSound = ''; // Set whatever you want from the assets files, like 'hodor_simple_3'

class Demo extends Component {

  state = {
    dataSource: ds.cloneWithRows([]),
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    setTimeout(() => {
      fetch('https://www.reddit.com/r/gameofthrones.json')
        .then((response) => response.json())
        .then((results) => this.setState({
          dataSource: ds.cloneWithRows(results.data.children),
          loading: false,
        }))
        .catch(() => console.log('(╯°□°）╯︵ ┻━┻'));
    }, 5000); // Timeout as I want to pretend the network is slow to get the loader longer
  }

  componentDidUpdate(prevProps, prevState) {
    // The fetching has started, we can play the audio loader
    if (!prevState.loading && this.state.loading) { HodorLoader.play(loadingSound); }

    // The fetching has stopped, we can stop the audio loader
    if (prevState.loading && !this.state.loading) { HodorLoader.stop(); }
  }

  render() {
    if (this.state.loading) {
      return <View style={styles.loading}><Text>Loading...</Text></View>;
    }

    const renderRow = (rowData) => {
      return (
          <View style={styles.row}>
            <Image source={{ uri: rowData.data.thumbnail }} style={styles.image} />
            <Text style={styles.text}>{rowData.data.title}</Text>
          </View>
      );
    };

    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        dataSource={this.state.dataSource}
        enableEmptySections
        renderRow={renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  image: {
    width: 140,
    height: 100,
  },
  loading: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    flex: 1,
    margin: 10,
  },
});

AppRegistry.registerComponent('demo', () => Demo);
