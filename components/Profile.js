import React, { Component } from "react";
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, TouchableOpacity, Text, View, Button } from "react-native";
import { ScrollView } from "react-native";
export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const user = this.props.user
    return (
      <ScrollView >
        <View style={styles.infor}>
          <Icon
            name="user-circle"
            type="font-awesome"
            size={40}
          />
          <Text style={{ fontSize: 30, marginBottom: 10, fontWeight: "bold", textAlign: "center" }}>
            {user.fullname}
          </Text>

          <View style={{ flexDirection: "row", margin: 20 }}>
            <Icon
              name="envelope"
              type="font-awesome"
              size={22}
              activeOpacity={20}
            />
            <Text style={{ fontSize: 15, marginBottom: 10, marginLeft: 10, color: "#a9a9a9", flex: 1 }}>
              {user.email}
            </Text>
          </View>

          <View style={{ flexDirection: "row", margin: 20 }}>
            <Icon
              name="phone"
              type="font-awesome"
              size={22}
            />
            <Text style={{ fontSize: 15, marginBottom: 10, marginLeft: 10, color: "#a9a9a9" }}>
              {user.phone}
            </Text>
          </View>
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
