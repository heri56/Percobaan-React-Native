import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Button
      onPress={()=>{
        Alert.alert('You Tapped');
      }}
      title="Ok"
      />
    </View>
    </View>
    );
  }
}

const element = <h1>Hello</h1>;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
});
