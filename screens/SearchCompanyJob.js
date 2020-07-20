import * as React from "react";
import {
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  View,
  TextInput,
  Text,
} from "react-native";
// You can import from local files
import axios from "axios";
import SearchValue from "../components/SearchValue";
import { SEARCH_COMPANY_JOB_URL } from "./api/api";
import { TouchableOpacity } from "react-native";

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobName: "",
      listJob: [],
    };
  }

  fetchData = () => {
    let token = this.props.navigation.state.params.token;
    let id = this.props.navigation.state.params.id;
    const jobName = this.state.jobName
    var that = this;
    axios
      .post(SEARCH_COMPANY_JOB_URL(id), {
        jobName: jobName,
        headers: { token: `${token}` },
      })
      .then(function (response) {
        // handle success
        const jobsArray = response.data.listJob
        console.log(jobsArray)
        that.setState({ listJob: jobsArray });
      });
  };

  componentWillMount() {
    this.fetchData();
  }

  render() {
    return (
      <ScrollView>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Search for Job"
            onChangeText={text => this.setState({ jobName: text })}
            value={this.state.text}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={_ => this.fetchData()}
        >
          <Text style={styles.text}>Search</Text>

        </TouchableOpacity>
        <FlatList
          data={this.state.listJob}
          renderItem={({ item }) => (
            <SearchValue
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
  input: {
    height: 40,
    backgroundColor: "#ffffff",
    width: 300,
    height: 44,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    marginBottom: 20,
  },
  button: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(71, 141, 226)",
    fontSize: 40,
    fontWeight: "bold",
    borderRadius: 10,
    height: 50,
    marginBottom: 15
  },
  text: {
    color: "white"
  }
});
