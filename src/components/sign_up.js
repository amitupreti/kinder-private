import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Dimensions,
  StyleSheet
} from 'react-native';

// Images
import BackgroundImage from '../../images/Background.jpg';

// Buttons
import { KinderButtonFill } from './kinder_button';

// WIDTH AND HEIGHT OF SCREEN
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class SignUpScreen extends Component {
  static navigationOptions = {
    title: 'Create Account',
    headerTransparent: true,
    headerTintColor: '#fff'
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      accountType: this.props.navigation.getParam("type", "No-Type")
    };
  }

  createAccount = () => {
    // SEND A POST REQUEST TO http://192.168.1.143:3000/

    fetch('http://192.168.1.143:3000/createaccount', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        accountType: this.state.accountType
      })
    })
      .then(res => res.json())
      .then(response => alert(response.message))
      .catch(err => alert(err));
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

        <View
          behavior="padding"
          style={
            {
              marginTop: SCREEN_HEIGHT / 2 - 100,
              paddingLeft: 40,
              paddingRight: 40
            }
          }>
          <Text style={
            {
              fontSize: 30,
              color: '#fff'
            }
          }>
            {" Let's Get Started! "}
          </Text>

          <TextInput
            placeholder={"Email"}
            placeholderTextColor="#d1d1d1"
            onChangeText={(email) => {
              this.setState({ email })
            }}
            style={
              {
                borderBottomColor: '#555',
                borderBottomWidth: 2,
                fontSize: 18,
                marginTop: 20,
                color: "#d1d1d1"
              }
            } />

          <TextInput
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor="#d1d1d1"
            onChangeText={(password) => {
              this.setState({ password })
            }}
            style={
              {
                borderBottomColor: '#555',
                borderBottomWidth: 2,
                fontSize: 18,
                marginTop: 20,
                color: "#d1d1d1"
              }
            } />

          <KinderButtonFill
            buttonTitle="Create"
            navigationScreen="SignIn"
            onPress={() => this.createAccount()}
            style={
              {
                alignItems: 'center',
                marginTop: 60
              }
            }
          />
        </View>
      </View>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create(
  {
    backgroundImageContainer: {
      flex: 1
    }
  }
);