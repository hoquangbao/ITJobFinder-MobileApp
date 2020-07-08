import * as React from "react";
import {
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { NavigationEvents } from "react-navigation";
// You can import from local files
import axios from "axios";
import Job from "../components/Job";
import { GET_ALL_JOB_URL } from "./api/api";

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      listJob: [],
    };
  }

  fetchData = () => {
    let token = this.props.navigation.state.params.token;
    var that = this;
    axios
      .get(GET_ALL_JOB_URL, {
        headers: { token: `${token}` },
      })
      .then(function (response) {
        // handle success
        const jobsArray = response.data.listJob
        that.setState({ listJob: jobsArray });
      });
  };

  componentWillMount() {
    this.fetchData();
  }

  render() {
    return (
      <ScrollView>
        <NavigationEvents onDidFocus={_ => this.fetchData()} />
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
