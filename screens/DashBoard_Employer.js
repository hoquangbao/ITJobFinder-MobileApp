import * as React from "react";
import {
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  Text,
} from "react-native";
import { NavigationEvents } from "react-navigation";
// You can import from local files
import axios from "axios";
import Job from "../components/JobOfEmployer";
import { GET_JOB_URL } from "./api/api";
import { GET_COMPANY_URL } from "./api/api";
import { Alert } from "react-native";
import { View } from "react-native";

export default class DashBoard extends React.Component {
  state = {
    listJob: [],
    listCompany: [],
    isCompany: false,
  };

  fetchData = () => {
    const { token, id } = this.props.navigation.state.params
    axios
      .all([
        axios.get(GET_JOB_URL(id), {
          headers: { token: `${token}` },
        }),
        axios.get(GET_COMPANY_URL(id), {
          headers: { token: `${token}` },
        }),
      ])
      .then(axios.spread((responseJob, responseCompany) => {
        // handle success
        const companyArray = responseCompany.data.listCompany;
        const jobArray = responseJob.data.listJob;

        if (companyArray == []) {
          this.setState({ isCompany: true })
        } else {
          this.setState({ listCompany: companyArray })
          this.setState({ listJob: jobArray })
        }

      }));
  };

  componentWillMount() {
    this.fetchData();
  }

  render() {
    const company = this.state.isListCompany;
    const { token, id } = this.props.navigation.state.params
    let message = "";
    if (company == true) {
      message = "You don't have any company";
    } else {
      message = ""
    }
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
              id={this.props.navigation.state.params.id}
            />
          )}
          keyExtractor={item => `${item._id}`}
        />
        <View style={{ alignItems: "center", marginTop: "50%" }}>
          <Text>{message}</Text>
          <Text style={{ color: 'blue' }} onPress={() => this.props.navigation.navigate('CreateCompany', { token: token, id: id })}>Create Company</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
