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
import { Icon, ThemeConsumer } from "react-native-elements";
import axios from "axios";
import { CREATE_COMPANY_URL } from "./api/api";
export default class Register extends React.Component {
  state = {
    companyName: "",
    address: "",
    numberOfEmployees: "",
    contact: "",
    type: "",
    startWorkingDate: "",
    endWorkingDate: "",
    description: "",
  };
  static navigationOptions = {
    title: "Register",
  };

  submitForm = () => {
    const { companyName, address, numberOfEmployees, contact, type,
      startWorkingDate, endWorkingDate, description } = this.state
    const id = this.props.navigation.state.params.id;
    if (this.state.companyName.length < 1) {
      Alert.alert("Error", "Please enter your company name", [
        {
          text: "Okay",
        },
      ]);
    } else if (this.state.address.length < 1) {
      Alert.alert("Message", "Please enter your company address", [
        {
          text: "Okay",
        },
      ]);
    } else if (this.state.numberOfEmployees.length < 1) {
      Alert.alert("Message", "Please enter number of employees", [
        {
          text: "Okay",
        },
      ]);
    } else if (this.state.contact.length < 1) {
      Alert.alert("Message", "Please enter your contact", [
        {
          text: "Okay",
        },
      ]);
    } else if (this.state.type.length < 1) {
      Alert.alert("Message", "Please enter your company type", [
        {
          text: "Okay",
        },
      ]);
    } else {
      this.moveToLoginScreen();
      axios
        .post(CREATE_COMPANY_URL, {
          companyName: companyName,
          address: address,
          numberOfEmployees: numberOfEmployees,
          contact: contact,
          type: type,
          startWorkingDate: startWorkingDate,
          endWorkingDate: endWorkingDate,
          description: description,
          createdBy: id
        })
        .then(function (response) {
          // handle success
          this.moveToLoginScreen;

          //   Alert.alert("Register successfully", [
          //     {
          //       text: "Okay"
          //     }
          //   ]);
        })
        .catch(function (error) {
          console.log(error.message)
          Alert.alert("Error", "Error", [
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
      "Create successfully, do you want to continue to create?",
      [
        { text: "No", onPress: () => this.props.navigation.navigate("DashBoard_Employer") },
        { text: "Yes", onPress: () => this.props.navigation.navigate("CreateCompany") }
      ],
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
              <Text style={styles.header}>Create Company</Text>
              <View style={styles.SectionStyle}>
                <Icon
                  name="user"
                  type="font-awesome"
                  size={22}
                  iconStyle={{ padding: 10 }}
                  color="#413E4F"
                />

                <TextInput
                  style={{ flex: 1, color: "#000" }}
                  onChangeText={companyName => this.setState({ companyName })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Company name"
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
                  style={{ flex: 1, color: "#000" }}
                  onChangeText={address => this.setState({ address })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Address"
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
                  style={{ flex: 1, color: "#000" }}
                  onChangeText={numberOfEmployees => this.setState({ numberOfEmployees })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Number of employees"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="sentences"
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
                  style={{ flex: 1, color: "#000" }}
                  onChangeText={contact => this.setState({ contact })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Contact"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="sentences"
                  keyboardType="number-pad"
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
                  style={{ flex: 1, color: "#000" }}
                  onChangeText={type => this.setState({ type })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter your company Type"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="sentences"
                />
              </View>
              <View style={styles.SectionStyle}>
                <Icon
                  name="user"
                  type="font-awesome"
                  size={22}
                  iconStyle={{ padding: 10 }}
                  color="#413E4F"
                />

                <TextInput
                  style={{ flex: 1, color: "#000" }}
                  onChangeText={startWorkingDate => this.setState({ startWorkingDate })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Start Working Date"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="sentences"
                />
              </View>
              <View style={styles.SectionStyle}>
                <Icon
                  name="user"
                  type="font-awesome"
                  size={22}
                  iconStyle={{ padding: 10 }}
                  color="#413E4F"
                />

                <TextInput
                  style={{ flex: 1, color: "#000" }}
                  onChangeText={endWorkingDate => this.setState({ endWorkingDate })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter End Working Date"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="sentences"
                />
              </View>
              <View style={styles.SectionStyle}>
                <Icon
                  name="user"
                  type="font-awesome"
                  size={22}
                  iconStyle={{ padding: 10 }}
                  color="#413E4F"
                />

                <TextInput
                  style={{ flex: 1, color: "#000" }}
                  onChangeText={description => this.setState({ description })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Description"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="sentences"
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
                  CREATE
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
