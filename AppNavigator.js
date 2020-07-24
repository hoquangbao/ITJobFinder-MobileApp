import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./screens/Login";
import DashBoard from "./screens/DashBoard";
import DashBoard_Employer from "./screens/DashBoard_Employer";
import Register from "./screens/Register";
import JobDetail from "./screens/JobDetail";
import JobOfCompanyDetail from "./screens/JobOfCompanyDetail";
import SearchJob from "./screens/SearchJob"
import UserProfile from "./screens/UserProfile";
import CreateJob from "./screens/CreateJob";
import EditJob from "./screens/EditJob"
import CompanyDetail from "./screens/CompanyDetail";
import CreateCompany from "./screens/CreateCompany";
import SearchCompanyJob from "./screens/SearchCompanyJob"
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
            onPress={() =>
              navigation.navigate("SearchCompanyJob", { token: token, id: id })
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
  CreateJob: {
    screen: CreateJob,
  },
  EditJob: {
    screen: EditJob
  },
  SearchCompanyJob: {
    screen: SearchCompanyJob
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
  JobOfCompanyDetail: {
    screen: JobOfCompanyDetail,
    // navigationOptions: ({ navigation }) => {
    //   let token = navigation.state.params.token;
    //   let id = navigation.state.params.id
    //   return {
    //     headerRight: (
    //       <TouchableOpacity
    //         style={{ margin: 10 }}
    //         onPress={() =>
    //           navigation.navigate("EditJob", { token: token, id: id })
    //         }
    //       >
    //         <Icon
    //           name="pencil"
    //           type="font-awesome"
    //           size={24}
    //         />
    //       </TouchableOpacity>
    //     )
    //   }
    // }
  },
  CompanyDetail: {
    screen: CompanyDetail,
  },
  CreateCompany: {
    screen: CreateCompany,
  }
});
export default AppNavigator;
