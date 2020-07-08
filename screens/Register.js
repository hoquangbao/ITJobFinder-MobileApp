import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import axios from "axios";
import { REGISTER_URL } from "./api/api";
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      fullname: "",
      email: "",
      password: "",
      phone: ""
    };
  }
  static navigationOptions = {
    title: "Register",
  };

  submitForm = () => {
    var self = this;
    if (this.state.password.length < 6) {
      Alert.alert("Error", "Password must > 6 characters", [
        {
          text: "Okay",
        },
      ]);
    } else if (this.state.email.indexOf("@") === -1) {
      Alert.alert("Message", "Email not correct", [
        {
          text: "Okay",
        },
      ]);
    } else {
      self.moveToLoginScreen();

      axios
        .post(REGISTER_URL, {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          phone: this.state.phone,
          fullname: this.state.fullname,
          role: 1
        })
        .then(function (response) {
          // handle success
          self.moveToLoginScreen;

          //   Alert.alert("Register successfully", [
          //     {
          //       text: "Okay"
          //     }
          //   ]);
        })
        .catch(function (error) {
          Alert.alert("Error", "Email or password not correct", [
            {
              text: "Okay",
            },
          ]);
        });
    }
  };
  moveToLoginScreen = () => {
    Alert.alert(
      //title
      "Message",
      //body
      "Register successfully",
      [{ text: "Ok", onPress: () => this.props.navigation.navigate("Login") }],
      { cancelable: true },
    );
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
        }}
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{ marginTop: 50 }}>
            <KeyboardAvoidingView enabled>
              <Text style={styles.header}>Register Account</Text>
              <View style={styles.SectionStyle}>
                <Icon
                  name="user"
                  type="font-awesome"
                  size={22}
                  iconStyle={{ padding: 10 }}
                  color="#413E4F"
                />

                <TextInput
                  style={{ flex: 1, color: "#A9A9A9" }}
                  onChangeText={username => this.setState({ username })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Username"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="sentences"
                />
              </View>
              <View style={styles.SectionStyle}>
                <Icon
                  name="id-card"
                  type="font-awesome"
                  size={16}
                  iconStyle={{ padding: 10 }}
                  color="#413E4F"
                />

                <TextInput
                  style={{ flex: 1, color: "#A9A9A9" }}
                  onChangeText={fullname => this.setState({ fullname })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Full Name"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="sentences"
                />
              </View>
              <View style={styles.SectionStyle}>
                <Icon
                  name="envelope"
                  type="font-awesome"
                  size={18}
                  iconStyle={{ padding: 10 }}
                  color="#413E4F"
                />

                <TextInput
                  style={{ flex: 1, color: "#A9A9A9" }}
                  onChangeText={email => this.setState({ email })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter  Email"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="sentences"
                  keyboardType="email-address"
                />
              </View>
              <View style={styles.SectionStyle}>
                <Icon
                  name="phone"
                  type="font-awesome"
                  size={18}
                  iconStyle={{ padding: 10 }}
                  color="#413E4F"
                />

                <TextInput
                  style={{ flex: 1, color: "#A9A9A9" }}
                  onChangeText={phone => this.setState({ phone })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Phone Number"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="sentences"
                  keyboardType="number-pad"
                />
              </View>
              <View style={styles.SectionStyle}>
                <Icon
                  name="lock"
                  type="font-awesome"
                  size={24}
                  iconStyle={{ padding: 12 }}
                  color="#413E4F"
                />

                <TextInput
                  style={{ flex: 1, color: "#A9A9A9" }}
                  onChangeText={password => this.setState({ password })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Password"
                  placeholderTextColor="#A9A9A9"
                  secureTextEntry
                />
              </View>

              <TouchableOpacity
                style={styles.ButtonStyle}
                activeOpacity={0.5}
                onPress={_ => this.submitForm()}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    paddingVertical: 10,
                  }}
                >
                  REGISTER
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  header: {
    fontSize: 36,
    marginBottom: 20,
    marginLeft: 40,
  },

  ButtonStyle: {
    backgroundColor: "rgb(71, 141, 226)",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#51D8C7",
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 30,
  },
});
