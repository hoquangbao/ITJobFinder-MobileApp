import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

export default class Button extends Component {
  constructor(props) {
    super(props)
    const {onPress} = props;
    
  }

  

 render() {
   return (
     <View style={styles.container}>
       <TouchableOpacity
         style={styles.button}
         onPress={onPress}>
         <Text style={styles.text}>{this.props.info}</Text>
       </TouchableOpacity>
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
    marginTop:70
  },
  button: {
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'rgb(71, 141, 226)',
    fontSize:40,
    fontWeight:'bold',
   borderRadius:10,
    height:50,
    padding: 10
  },
  text:{
    color:'white'
  }
 
})
