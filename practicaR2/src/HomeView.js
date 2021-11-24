import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HOME PAGE PROXIMAMENTE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});