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
import { CREATE_JOB_URL } from "./api/api";
import { GET_ALL_COMPANY_URL } from "./api/api";
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobName: "",
      jobDescription: "",
      salary: "",
      companyId: "",
      userId: "",
      listCompany: [],
    };
  }
  static navigationOptions = {
    title: "Register",
  };

  fetchData = () => {
    let token = this.props.navigation.state.params.token;
    var that = this;
    axios
      .get(GET_ALL_COMPANY_URL, {
        headers: { token: `${token}` },
      })
      .then(function (response) {
        // handle success
        const companyArray = response.data.listCompany
        that.setState({ listCompany: companyArray });

      });
  };

  componentWillMount() {
    this.fetchData();
  }

  submitForm = () => {
    const user = this.props.navigation.state.params.id;
    const token = this.props.navigation.state.params.token;
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
        .post(CREATE_JOB_URL, {
          headers: { token: `${token}` },
          jobName: this.state.jobName,
          jobDescription: this.state.jobDescription,
          salary: this.state.salary,
          companyId: this.state.companyId,
          userId: user,
          role: 1
        })
        .then(function (response) {
          self.moveToLoginScreen;
        })
        .catch(function (error) {
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
      "Add Job successfully",
      [{ text: "Ok", onPress: () => this.props.navigation.navigate("DashBoard_Employer") }],
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
              <Text style={styles.header}>Create Job</Text>
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
                  onChangeText={jobName => this.setState({ jobName })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Job Name"
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
                  onChangeText={jobDescription => this.setState({ jobDescription })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Description"
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
                  onChangeText={salary => this.setState({ salary })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Salary"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="sentences"
                  keyboardType="email-address"
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
                  Create
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
