import React from "react";
import { AppRegistry } from "react-native";

// Import the components
// ...beforelogin
import HomeScreen from "./src/components/home_screen";
import CreateAccountScreen from "./src/components/create_account";
import SignUpScreen from "./src/components/sign_up";
import SignInScreen from "./src/components/sign_in";

// ...afterlogin
import TeacherHomePageScreen from "./src/components/teacher_home_page";

// React Navigation
import { createStackNavigator } from "react-navigation";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },

    CreateAccount: {
      screen: CreateAccountScreen
    },

    SignIn: {
      screen: SignInScreen
    },

    SignUp: {
      screen: SignUpScreen
    },

    TeacherHomePage: {
      screen: TeacherHomePageScreen
    }
  },
  {
    initialRouteName: "TeacherHomePage"
  }
);

class Kinder_App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default Kinder_App;

AppRegistry.registerComponent("Kinder", () => Kinder_App);
