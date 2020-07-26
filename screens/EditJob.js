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
import { UPDATE_JOB_URL } from "./api/api";
export default class EditJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobName: "",
      jobDescription: "",
      salary: "",
    };
  }
  static navigationOptions = {
    title: "Edit Job",
  };

  submitForm = () => {
    let id = this.props.navigation.state.params.jobs.job._id
    const token = this.props.navigation.state.params.token;
    const userId = this.props.navigation.state.params.jobs.job.userId
    const companyId = this.props.navigation.state.params.jobs.job.companyId._id
    var self = this;
    if (this.state.jobName.length < 1) {
      Alert.alert("Error", "Please Enter Your Job Name", [
        {
          text: "Okay",
        },
      ]);
    } else if (this.state.jobDescription.length < 1) {
      Alert.alert("Message", "Please Enter Your Job Description", [
        {
          text: "Okay",
        },
      ]);
    } else if (this.state.salary.length < 1) {
      Alert.alert("Message", "Please Enter Your Job Salary", [
        {
          text: "Okay",
        },
      ]);
    } else {
      self.moveToLoginScreen();

      axios
        .patch(UPDATE_JOB_URL(id), {
          headers: { token: `${token}` },
          jobName: this.state.jobName,
          jobDescription: this.state.jobDescription,
          salary: this.state.salary,
          userId: userId,
          companyId: companyId,
        })
        .then(function (response) {
          self.moveToLoginScreen;
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
  moveToLoginScreen = () => {
    let jobs = this.props.navigation.state.params.jobs.job;
    let token = this.props.navigation.state.params.token;
    Alert.alert(
      //title
      "Message",
      //body
      "Update successfully",
      [{
        text: "Ok", onPress: () => this.props.navigation.push("JobOfCompEmpanyDetail", {
          job: jobs,
          token: token
        })
      }],
      { cancelable: true },
    );
  };

  render() {
    let job = this.props.navigation.state.params.jobs
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
              <Text style={styles.header}>Job Detail </Text>
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
                  onChangeText={jobName => this.setState({ jobName })}

                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Job Name"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="sentences"
                >
                  {job.job.jobName}
                </TextInput>
              </View>
              <View style={{
                flexDirection: "row",
                height: 80,
                marginTop: 20,
                marginLeft: 35,
                marginRight: 35,
                margin: 10,
              }}>
                <Icon
                  name="id-card"
                  type="font-awesome"
                  size={16}
                  iconStyle={{ padding: 10 }}
                  color="#413E4F"
                />

                <TextInput
                  style={{ flex: 1, color: "#000", }}
                  multiline={true}
                  onChangeText={jobDescription => this.setState({ jobDescription })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Job Description"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="sentences"
                >
                  {job.job.jobDescription}
                </TextInput>
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
                  onChangeText={salary => this.setState({ salary })}
                  underlineColorAndroid="#A9A9A9"
                  placeholder="Enter Job's Salary"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="sentences"
                >
                  {job.job.salary}
                </TextInput>
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
                  UPDATE
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
