import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./screens/Login";
import DashBoard from "./screens/DashBoard";
import DashBoard_Employer from "./screens/DashBoard_Employer";
import Register from "./screens/Register";
import JobDetail from "./screens/JobDetail";
import SearchJob from "./screens/SearchJob"
import UserProfile from "./screens/UserProfile";
import CreateJob from "./screens/CreateJob";
import CompanyDetail from "./screens/CompanyDetail";
import CreateCompany from "./screens/CreateCompany";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  DashBoard: {
    screen: DashBoard,
    navigationOptions: ({ navigation }) => {
      //destructure the navigation property here
      let id = navigation.state.params.id;
      let token = navigation.state.params.token;
      return {
        title: "List Jobs",
        headerRight: (
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() =>
              navigation.navigate("UserProfile", { token: token, id: id })
            }
          >
            <Icon
              name="user-circle"
              type="font-awesome"
              size={24}
            />
          </TouchableOpacity>
        ),
        headerLeft: (
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() =>
              navigation.navigate("SearchJob", { token: token })
            }
          >
            <Icon
              name="search"
              type="font-awesome"
              size={24}
            />
          </TouchableOpacity>
        ),
      };
    },
  },
  DashBoard_Employer: {
    screen: DashBoard_Employer,
    navigationOptions: ({ navigation }) => {
      //destructure the navigation property here
      let id = navigation.state.params.id;
      let token = navigation.state.params.token;
      return {
        title: "Dashboard",
        headerRight: (
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() =>
              navigation.navigate("CreateJob", { token: token, id: id })
            }
          >
            <Icon
              name="plus"
              type="font-awesome"
              size={24}
            />
          </TouchableOpacity>
        ),
        headerLeft: (
          <TouchableOpacity
            style={{ margin: 10 }}
          // onPress={() =>
          //   navigation.navigate("SearchJob", { token: token })
          // }
          >
            <Icon
              name="search"
              type="font-awesome"
              size={24}
            />
          </TouchableOpacity>
        ),
      };
    },
  },
  CreateJob: {
    screen: CreateJob,
  },
  UserProfile: {
    screen: UserProfile,
  },
  SearchJob: {
    screen: SearchJob,
    navigationOptions: ({ navigation }) => {
      let token = navigation.state.params.token;
      return {
        headerLeft: (
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() =>
              navigation.navigate("DashBoard", { token: token })
            }
          >
            <Icon
              name="angle-left"
              type="font-awesome"
              size={24}
            />
          </TouchableOpacity>
        )
      }
    }
  },
  Register: {
    screen: Register,
  },
  JobDetail: {
    screen: JobDetail,
  },
  CompanyDetail: {
    screen: CompanyDetail,
  },
  CreateCompany: {
    screen: CreateCompany,
  }
});
export default AppNavigator;
