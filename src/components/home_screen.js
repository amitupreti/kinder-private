import React, { Component } from "react";
import { View, StatusBar, Image, StyleSheet, Dimensions, AsyncStorage } from "react-native";

// Images
import BackgroundImage from "../../images/Background.jpg";
import KinderLogo from "../../images/kinder.png";

// Buttons
import { KinderButtonFill, KinderButtonStroke } from "./kinder_button";

// WIDTH AND HEIGHT OF SCREEN
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    try {
      const loginEmail = await AsyncStorage.getItem("loginEmail");
      const loginId = await AsyncStorage.getItem("loginId");
      const loginType = await AsyncStorage.getItem("loginType");

      if (loginEmail !== null && loginId !== null && loginType !== null) {
        if (loginType === "parent") {
          this.props.navigation.navigate("ParentHomePage");
        } else if (loginType === "staff") {
          this.props.navigation.navigate("TeacherHomePage");
        } else {
          alert("INVALID TYPE");
        }
      }
    } catch (error) {
      throw error;
    }
  }

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <View style={styles.backgroundImageContainer}>
          <Image
            source={BackgroundImage}
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT
            }}
            blurRadius={5}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: 200
          }}
        >
          <Image
            style={{
              height: 200,
              width: 200
            }}
            source={KinderLogo}
          />
          <View
            style={{
              marginTop: 70
            }}
          >
            <KinderButtonFill
              buttonTitle="Create Account"
              onPress={() => this.props.navigation.navigate("CreateAccount")}
            />

            <KinderButtonStroke
              buttonTitle="Sign In"
              onPress={() => this.props.navigation.navigate("SignIn")}
              style={{
                marginTop: 20
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1
  }
});
