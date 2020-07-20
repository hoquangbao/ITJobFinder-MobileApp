import React, { Component } from "react";
import { Icon } from "react-native-elements";
import { StyleSheet, TouchableOpacity, Text, View, Button } from "react-native";
export default class Job extends React.Component {


  render() {
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
