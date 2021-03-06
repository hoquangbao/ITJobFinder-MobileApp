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
  Alert,
} from "react-native";
import Job from "../components/Job"
import Axios from "axios";
import { GET_ALL_JOB_URL } from "./api/api";

export default class JobDetail extends React.Component {
  constructor() {
    super();

    this.state = {
      listJob: []
      // startDate : moment(this.props.project.startDate).format("DD MMM YYYY"),
      // endDate : moment(this.props.project.endDate).format("DD MMM YYYY"),
    };
  }

  fetchData = () => {
    let token = this.props.navigation.state.params.token;
    var that = this;
    Axios
      .get(GET_ALL_JOB_URL, {
        headers: { token: `${token}` },
      })
      .then(function (response) {
        // handle success
        const jobsArray = response.data.listJob
        that.setState({ listJob: jobsArray });
      });
  };

  checkApply() {
    Alert.alert(
      //title
      "Message",
      //body
      "Apply successfully",
      [{
        text: "Ok", onPress: () => this.props.navigation.navigate("DashBoard",)
      }],
      { cancelable: true },
    );
  }

  componentWillMount() {
    this.fetchData();
  }

  static navigationOptions = {
    title: "Job Detail",
  };
  render() {
    let jobs = this.props.navigation.state.params;
    let token = this.props.navigation.state.params.token;
    return (
      <ScrollView >
        <View style={styles.infor}>
          <Text style={{ fontSize: 30, marginBottom: 10, fontWeight: "bold", }}>
            {jobs.job.jobName}
          </Text>

          <Text style={{ fontSize: 25, marginBottom: 10, fontWeight: "bold", color: "rgb(255, 116, 51)", }}>
            {jobs.job.salary}
          </Text>

          <Text style={{ fontSize: 15, marginBottom: 10, color: "#a9a9a9" }}>
            {jobs.job.companyId.address}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={_ => this.checkApply()}
          >
            <Text style={styles.text}>Aplly Now</Text>
          </TouchableOpacity>
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
        <View style={{ width: "100%", height: 1, backgroundColor: "#d3d3d3" }} />
        <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 22 }}>More Jobs</Text>
        <View>
          <FlatList
            data={this.state.listJob}
            renderItem={({ item }) => (
              <Job
                jobs={item}
                navigation={this.props.navigation}
                token={this.props.navigation.state.params.token}
              />
            )}
            keyExtractor={item => `${item._id}`}
          />
        </View>
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
