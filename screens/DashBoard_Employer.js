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
import Job from "../components/Job";
import { GET_ALL_JOB_URL } from "./api/api";
import { GET_ALL_COMPANY_URL } from "./api/api";
import { Alert } from "react-native";
import { View } from "react-native";

export default class DashBoard extends React.Component {
  state = {
    listJob: [],
    listCompany: [],
    isListCompany: false,
  };

  fetchData = () => {
    const { token, id } = this.props.navigation.state.params
    axios
      .all([
        axios.get(GET_ALL_JOB_URL, {
          headers: { token: `${token}` },
        }),
        axios.get(GET_ALL_COMPANY_URL, {
          headers: { token: `${token}` },
        }),
      ])
      .then(axios.spread((responseJob, responseCompany) => {
        // handle success
        const companyArray = responseCompany.data.listCompany;
        const jobArray = responseJob.data.listJob;
        var isNotFoundCompany = false;

        companyArray.map(company => {
          if (company.createdBy == id) {
            this.setState({ listCompany: companyArray })
            this.setState({ listJob: jobArray })
          } else {
            this.setState({ isListCompany: true });
          }
        });
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
    }
    return (
      <ScrollView>
        <View style={{ alignItems: "center", marginTop: "50%" }}>
          <Text>{message}</Text>
          <Text style={{ color: 'blue' }} onPress={() => this.props.navigation.navigate('CreateCompany', { token: token, id: id })}>Create Company</Text>
        </View>
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
