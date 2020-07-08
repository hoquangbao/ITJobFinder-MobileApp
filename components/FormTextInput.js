import React, { Component } from 'react';
import { Text, TextInput, View ,StyleSheet } from 'react-native';

export default class FormTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder={this.props.info}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        
      </View>
    );
  }
  

  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    margin:40,
    

   
  },
  
  input: {
     height:40,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    
    
  }
});