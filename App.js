import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import params from './src/params'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciano Mine!</Text>
        <Text style={styles.welcome}>
          Tamanho da grade:
          {params.getRowsAmount()}x{params.getColunmsAmount()}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});