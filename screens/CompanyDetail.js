import React, { Component } from "react";
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from "react-native";

export default class CompanyDetail extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      startDate: "",
      endDate: "",
      // startDate : moment(this.props.project.startDate).format("DD MMM YYYY"),
      // endDate : moment(this.props.project.endDate).format("DD MMM YYYY"),
    };
  }

  static navigationOptions = {
    title: "Company Infomation",
  };
  render() {
    let company = this.props.navigation.state.params;
    let token = this.props.navigation.state.params.token;
    return (
      <ScrollView >
        <View style={styles.infor}>
          <Text style={{ fontSize: 30, marginBottom: 10, fontWeight: "bold", textAlign: "center" }}>
            {company.companyId.companyName}
          </Text>

          <Text style={{ fontSize: 20, marginBottom: 10, color: "#a9a9a9", textAlign: "center" }}>
            {company.companyId.address}
          </Text>

          <View style={{ flexDirection: "row", margin: 20 }}>

            <Icon
              name="group"
              type="font-awesome"
              size={22}
              activeOpacity={20}
            />
            <Text style={{ fontSize: 15, marginBottom: 10, marginLeft: 10, color: "#a9a9a9", flex: 1 }}>
              {company.companyId.numberOfEmployees}
            </Text>
          </View>

          <View style={{ flexDirection: "row", margin: 20 }}>
            <Icon
              name="archive"
              type="font-awesome"
              size={22}
            />
            <Text style={{ fontSize: 15, marginBottom: 10, marginLeft: 10, color: "#a9a9a9" }}>
              {company.companyId.description}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 20 }}>
            <Icon
              name="file-code-o"
              type="font-awesome"
              size={22}
            />
            <Text style={{ fontSize: 15, marginBottom: 10, marginLeft: 10, color: "#a9a9a9" }}>
              {company.companyId.type}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 20 }}>
            <Icon
              name="phone"
              type="font-awesome"
              size={22}
            />
            <Text style={{ fontSize: 15, marginBottom: 10, marginLeft: 10, color: "#a9a9a9" }}>
              {company.companyId.contact}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 20 }}>
            <Icon
              name="code-fork"
              type="font-awesome"
              size={22}
            />
            <Text style={{ fontSize: 15, marginBottom: 10, marginLeft: 10, color: "#a9a9a9" }}>
              {company.companyId.startWorkingDate} - {company.companyId.endWorkingDate}
            </Text>
          </View>


          {/* <TouchableOpacity
            style={styles.button}
          // onPress={_ => this.checkLogin()}
          >
            <Text style={styles.text}>Aplly Now</Text>
          </TouchableOpacity> */}
        </View>

        {/* <View style={{ width: "100%", height: 1, backgroundColor: "#d3d3d3" }} />
        <TouchableOpacity style={{ width: "100%", height: 70 }}
          onPress={() =>
            this.props.navigation.navigate("CompanyDetail", {
              job: this.props.jobs,
              token: this.props.token
            })
          }
        >
          <Text style={{ fontSize: 20, marginBottom: 10, margin: 10 }}>
            {jobs.job.companyId.companyName}
          </Text>
        </TouchableOpacity>
        <View style={{ width: "100%", height: 12, backgroundColor: "#e7e7e7", }} />
        <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 22 }}>Job Description</Text>
        <Text style={{ fontSize: 20, marginBottom: 10, margin: 10 }}>
          {jobs.job.jobDescription}
        </Text> */}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    margin: 0,
    padding: 10,
  },
  button: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 116, 51)",
    fontSize: 40,
    fontWeight: "bold",
    borderRadius: 3,
    height: 50,
    marginBottom: 15
  },
  text: {
    color: "#fff",
    fontFamily: "Times New Roman",
  },
  header: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#9fa6b1",
    paddingBottom: 5,
  },
  infor: {
    flex: 1,
    margin: 10,
    marginTop: 10,
  },
  input: {
    height: 50,
    width: 300,

    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    marginBottom: 10,
  },
  updateProject: {
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(71, 141, 226)",
    fontSize: 40,
    fontWeight: "bold",
    borderRadius: 10,
    height: 50,

    marginRight: 20,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 116, 51)",
    fontSize: 40,
    fontWeight: "bold",
    borderRadius: 10,
    height: 50,
    marginBottom: 15
  },
  createTask: {
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 116, 51)",
    fontSize: 40,
    fontWeight: "bold",
    borderRadius: 10,
    height: 50,

    marginRight: 20,
  },
  viewTask: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 196, 51) ",
    fontSize: 40,
    fontWeight: "bold",
    borderRadius: 10,
    height: 50,

    marginRight: 20,
  },
  buttonWrapper: {
    flexDirection: "row",
    marginTop: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
