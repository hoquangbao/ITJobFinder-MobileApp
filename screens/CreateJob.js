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
  Picker,
} from "react-native";
import { Icon } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
import { CREATE_JOB_URL } from "./api/api";
import { GET_COMPANY_URL } from "./api/api";
export default class CreateJob extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      jobName: "",
      jobDescription: "",
      salary: "",
      companyId: "",
      listCompany: []
    }
  }

  fetchData = () => {
    let token = this.props.navigation.state.params.token;
    const id = this.props.navigation.state.params.id;
    var that = this;
    axios
      .get(GET_COMPANY_URL(id), {
        headers: { token: `${token}` },
      })
      .then(function (response) {
        // handle success 
        let newArray = response.data.listCompany;
        that.setState({ listCompany: newArray });
      });
  };

  componentWillMount() {
    this.fetchData();
  }


  static navigationOptions = {
    title: "Create Job",
  };

  submitForm = () => {
    const id = this.props.navigation.state.params.id;
    const token = this.props.navigation.state.params.token;
    var self = this;
    if (this.state.jobName.length < 1) {
      Alert.alert("Error", "Please Enter Job Name", [
        {
          text: "Okay",
        },
      ]);
    } else if (this.state.jobDescription.length < 1) {
      Alert.alert("Message", "Please Enter Job Description", [
        {
          text: "Okay",
        },
      ]);
    } else if (this.state.salary.length < 1) {
      Alert.alert("Message", "Please Enter Salary", [
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
          userId: id,
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
    let arr = this.state.listCompany
    let values = arr.map(el => el.companyName)
    let value0 = values[0]
    let value1 = values[1]
    let value2 = values[2]
    let value3 = values[3]
    let value4 = values[4]
    let id = arr.map(el => el._id)
    let id0 = id[0]
    let id1 = id[1]
    let id2 = id[2]
    let id3 = id[3]
    let id4 = id[4]
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
              <View style={styles.SectionStyle}>
                <Icon
                  name="building"
                  type="font-awesome"
                  size={18}
                  iconStyle={{ padding: 10 }}
                  color="#413E4F"
                />
                <RNPickerSelect
                  style={{
                    ...pickerSelectStyles,
                  }}
                  onValueChange={value => {
                    this.setState({
                      companyId: value,
                    });
                  }}
                  items={[
                    { label: value0, value: id0 },
                    { label: value1, value: id1 },
                    { label: value2, value: id2 },
                    { label: value3, value: id3 },
                    { label: value4, value: id4 },
                  ]}
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
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
