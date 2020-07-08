import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView, Platform
} from "react-native";
import axios from "axios";
import Logo from "../components/Logo";
import { LOGIN_URL } from "./api/api";

export default class Login extends React.Component {
  state = { username: "", password: "" };

  checkLogin() {
    const { username, password } = this.state;
    var self = this;
    axios
      .post(LOGIN_URL, {
        username: username,
        password: password
      })
      .then(function (response) {
        // handle success
        if (response.data.role == 1) {
          self.props.navigation.navigate("DashBoard", { token: response.data.token, id: response.data._id },);
        }
        else {
          self.props.navigation.navigate("DashBoard_Employer", { token: response.data.token, id: response.data._id },);
        }
      })
      .catch(function (error) {
        Alert.alert("Error", "Invalid username or password", [
          {
            text: "Okay"
          }
        ]);
      });
  }

  render() {
    return (
      <View style={styles.container}
      >
        <Logo />

        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => this.setState({ username: text })}
          value={this.state.text}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={_ => this.checkLogin()}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <Text>
          Don't have an account? <Text style={{ color: 'blue' }} onPress={() => this.props.navigation.navigate('Register')}>Register</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    alignItems: "center",

  },

  input: {
    height: 40,
    backgroundColor: "#ffffff",
    width: 300,
    height: 44,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    marginBottom: 20,
  },

  button: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(71, 141, 226)",
    fontSize: 40,
    fontWeight: "bold",
    borderRadius: 10,
    height: 50,
    marginBottom: 15
  },
  text: {
    color: "white"
  }
});
