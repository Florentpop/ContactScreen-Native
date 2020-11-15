import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react'
import ContactScreen from './ContactScreen';
import Contact from './components/Contact';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ContactScreen />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:100
   
  },
});
