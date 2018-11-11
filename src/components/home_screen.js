import React, { Component } from "react";
import { View, StatusBar, Image, StyleSheet, Dimensions } from "react-native";

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
              navigateTo={this.props.navigation}
              navigationScreen="CreateAccount"
            />
            <KinderButtonStroke
              buttonTitle="Sign In"
              navigateTo={this.props.navigation}
              navigationScreen="SignIn"
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
