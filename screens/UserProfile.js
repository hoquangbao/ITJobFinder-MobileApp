import React, { Component } from "react";
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppContainer, NavigationEvents, FlatList } from "react-navigation";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from "react-native";
import { GET_USER_PROFILE } from "./api/api";
import Profile from "../components/Profile";
import axios from "axios";

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      userProfile: []
    }
  }

  fetchData = () => {
    let token = this.props.navigation.state.params.token;
    const id = this.props.navigation.state.params.id;
    var that = this;
    axios
      .get(GET_USER_PROFILE(id), {
        headers: { token: `${token}` },
      })
      .then(function (response) {
        // handle success 
        let newArray = response.data;
        that.setState({ userProfile: [newArray] });
      });
  };

  componentWillMount() {
    this.fetchData();
  }

  static navigationOptions = {
    title: "Profile",
  };
  render() {
    return (
      <ScrollView>
        <NavigationEvents onDidFocus={_ => this.fetchData()} />
        <FlatList
          data={this.state.userProfile}
          renderItem={({ item }) => (
            <Profile
              user={item}
              navigation={this.props.navigation}
              token={this.props.navigation.state.params.token}
            />
          )}
          keyExtractor={item => `${item._id}`}
        />
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
