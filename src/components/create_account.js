import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet
} from 'react-native';

// Images
import BackgroundImage from '../../images/Background.jpg';

// Buttons
import { KinderButtonStroke } from './kinder_button';

// WIDTH AND HEIGHT OF SCREEN
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class CreateAccountScreen extends Component {
  static navigationOptions = {
    title: 'Account Type',
    headerTransparent: true,
    headerTintColor: '#fff'
  }

  render() {
    return (
      <View>
        <View style={styles.backgroundImageContainer}>
          <Image
            source=
            {
              BackgroundImage
            }
            style=
            {
              {
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT
              }
            }
            blurRadius={10}
          />
        </View>

        <View style={
          {
            marginTop: SCREEN_HEIGHT / 2 + 30,
            paddingLeft: 50
          }
        }>
          <Text style={
            {
              fontSize: 40,
              color: '#fff'
            }
          }>
            Welcome!
              </Text>

          <Text
            style={
              {
                fontSize: 15,
                color: '#fff'
              }
            }>
            Which best describes you?
              </Text>
        </View>

        <KinderButtonStroke
          buttonTitle="Staff or Teacher"
          onPress={() => this.props.navigation.navigate("SignUp", { type: "staff" })}
          style={
            {
              marginTop: 25,
              alignItems: 'center'
            }
          }
        />

        <KinderButtonStroke
          buttonTitle="Parents"
          onPress={() => this.props.navigation.navigate("SignUp", { type: "parent" })}
          style={
            {
              marginTop: 20,
              alignItems: 'center'
            }
          }
        />
      </View>
    );
  }
}

export default CreateAccountScreen;

const styles = StyleSheet.create(
  {
    backgroundImageContainer: {
      flex: 1
    }
  }
);