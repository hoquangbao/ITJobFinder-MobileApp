import React, { Component } from "react";
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppContainer, FlatList } from "react-navigation";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import Job from "../components/Job"
import Axios from "axios";
import { GET_ALL_JOB_URL } from "./api/api";

export default class JobDetail extends React.Component {

  static navigationOptions = {
    title: "Job Detail",

  };

  render() {
    let jobs = this.props.navigation.state.params;
    let token = this.props.navigation.state.params.token;
    return (
      <ScrollView >
        <View style={styles.infor}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 30, marginBottom: 10, fontWeight: "bold", }}>
              {jobs.job.jobName}
            </Text>
            <TouchableOpacity
              style={{ marginLeft: 70, marginTop: 10 }}
              onPress={() =>
                this.props.navigation.navigate("EditJob", {
                  jobs: jobs,
                  token: token
                })
              }
            >
              <Icon
                name="pencil"
                type="font-awesome"
                size={24}
              />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 25, marginBottom: 10, fontWeight: "bold", color: "rgb(255, 116, 51)", }}>
            {jobs.job.salary}
          </Text>

          <Text style={{ fontSize: 15, marginBottom: 10, color: "#a9a9a9" }}>
            {jobs.job.companyId.address}
          </Text>

        </View>

        <View style={{ width: "100%", height: 1, backgroundColor: "#d3d3d3" }} />
        <TouchableOpacity style={{ width: "100%", height: 70 }}
          onPress={() =>
            this.props.navigation.navigate("CompanyDetail", {
              companyId: jobs.job.companyId,
              token: token
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
        </Text>
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
