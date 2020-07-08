import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// You can import from local files
import AppNavigator from './AppNavigator';
console.disableYellowBox = true;
const AppContainer = createAppContainer(AppNavigator);




export default class App extends React.Component {
  render() {
    return <AppContainer />;

  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40

  }

});
