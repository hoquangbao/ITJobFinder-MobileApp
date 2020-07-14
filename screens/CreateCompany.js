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
    title: "Create Company",
  };

  submitForm = () => {
    const token = this.props.navigation.state.params.token;
    if (this.state.companyName.length <= 0) {
      Alert.alert("Error", "Please enter your company name", [
        {
          text: "Okay",
        },
      ]);
    } else if (this.state.address.length <= 0) {
      Alert.alert("Message", "Please enter your address", [
        {
          text: "Okay",
        },
      ]);
    } else if (this.state.numberOfEmployees.length <= 0) {
      Alert.alert("Message", "Please enter number of employees", [
        {
          text: "Okay",
        },
      ]);
    } else if (this.state.contact.length <= 0) {
      Alert.alert("Message", "Please enter your contact", [
        {
          text: "Okay",
        },
      ]);
    } else {
      this.continueOrNot();

      axios
        .post(CREATE_COMPANY_URL, {
          headers: { token: `${token}` },
          companyName: this.state.companyName,
          address: this.state.address,
          numberOfEmployees: this.state.numberOfEmployees,
          contact: this.state.contact,
          type: this.state.type,
          startWorkingDate: this.state.startWorkingDate,
          endWorkingDate: this.state.endWorkingDate,
          description: this.state.description,
        })
        .then(function (response) {
          this.continueOrNot;
        })
        .catch(function (error) {
          Alert.alert("Error", { error }, [
            {
              text: "Okay",
            },
          ]);
        });
    }
  };
  continueOrNot = () => {
    Alert.alert(
      //title
      "Message",
      //body
      "Create successfully, Do you want to continue to create?",
      [
        { text: "Ok", onPress: () => this.props.navigation.navigate("CreateCompany") },
        { text: "Cancel", onPress: () => this.props.navigation.navigate("Dashboard_Employer") }
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
                  style={{ flex: 1, color: "#A9A9A9" }}
                  onChangeText={companyName => this.setState({ companyName })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Company Name"
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
                  style={{ flex: 1, color: "#A9A9A9" }}
                  onChangeText={numberOfEmployees => this.setState({ numberOfEmployees })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Number Of Employees"
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
                  style={{ flex: 1, color: "#A9A9A9" }}
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
                  name="phone"
                  type="font-awesome"
                  size={18}
                  iconStyle={{ padding: 10 }}
                  color="#413E4F"
                />

                <TextInput
                  style={{ flex: 1, color: "#A9A9A9" }}
                  onChangeText={type => this.setState({ type })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Type"
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
                  onChangeText={startWorkingDate => this.setState({ startWorkingDate })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Start Working Date"
                  placeholderTextColor="#A9A9A9"
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
                  onChangeText={endWorkingDate => this.setState({ endWorkingDate })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter End Working Date"
                  placeholderTextColor="#A9A9A9"
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
                  onChangeText={description => this.setState({ description })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Description"
                  placeholderTextColor="#A9A9A9"
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
