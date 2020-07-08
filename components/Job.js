import React, { Component } from "react";
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, TouchableOpacity, Text, View, Button } from "react-native";
import moment from "moment";
export default class Job extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      startDate: "",
      endDate: ""
      // startDate : moment(this.props.project.startDate).format("DD MMM YYYY"),
      // endDate : moment(this.props.project.endDate).format("DD MMM YYYY"),
    };
  }
  //   addCommand = () => {
  //     this.props.navigation.navigate("Login");
  // }

  // checkStatus() {
  //   switch (this.props.job.projectStatus) {
  //     case "NOT STARTED":
  //       return "gray";
  //     case "IN PROGRESS":
  //       return "orange";
  //     case "COMPLETED":
  //       return "green";
  //     case "FAILED":
  //       return "red";
  //     default:
  //       return "gray";
  //   }
  // }

  // ShowHideComponent = () => {
  //   if (this.state.show == true) {
  //     this.setState({ show: false });
  //   } else {
  //     this.setState({ show: true });
  //   }
  // };

  render() {
    // const startDate = moment(this.props.project.startDate).format(
    //   "DD MMM YYYY"
    // );
    // const endDate = moment(this.props.project.endDate).format("DD MMM YYYY");
    // const createdAT = moment(this.props.project.created_at).format(
    //   "DD MMM YYYY HH:mm:ss"
    // );
    // const updateAT = moment(this.props.project.updated_at).format(
    //   "DD MMM YYYY HH:mm:ss"
    // );
    return (
      <View>
        <TouchableOpacity style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("JobDetail", {
              job: this.props.jobs,
              token: this.props.token
            })
          }
        >
          <View style={styles.header}>
            <Icon
              name="archive"
              type="font-awesome"

              size={22}
            />
            <Text
              style={{
                flex: 1,
                fontSize: 20,

                marginLeft: 10
              }}
            >
              {this.props.jobs.jobName}
            </Text>
          </View>


          <View style={styles.title}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Icon
                name="map-marker"
                type="font-awesome"
                color="#206FDE"
                size={20}

              />
              <Text style={{ marginLeft: 10, flex: 1 }}>Job Description: {this.props.jobs.jobDescription} </Text>
            </View>


            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Icon
                name="map-marker"
                type="font-awesome"
                color="#de2032"
                size={20}
              />
              <Text style={{ marginLeft: 10 }} >Salary: {this.props.jobs.salary} </Text>
            </View>
          </View>


          {/* <View style={{ flexDirection: "row-reverse", marginTop: 10 }} >
            <Text style={{ color: this.checkStatus(), fontWeight: "bold" }}>
              {this.props.project.projectStatus}
            </Text>
          </View>  */}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,

    borderTopColor: "#a9b2bf",
    borderLeftColor: "#c3c6ca",
    borderRightColor: "#c3c6ca",
    borderBottomColor: "#a9b2bf",
    margin: 20
  },
  text: {
    color: "#B2BEB5",
    fontWeight: "bold"
  },
  title: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: 10,
  },
  projectDetail: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    marginRight: 20
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

    marginRight: 20
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

    marginRight: 20
  },
  viewTask: {
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 196, 51) ",
    fontSize: 40,
    fontWeight: "bold",
    borderRadius: 10,
    height: 50,

    marginRight: 20
  },
  text: {
    color: "white",
    fontWeight: "bold"
  },
  header: {
    flex: 1,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#c3c6ca",
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "flex-end"
  }
});
