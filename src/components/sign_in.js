import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  AsyncStorage
} from 'react-native';

// Images
import BackgroundImage from '../../images/Background.jpg';

// Buttons
import { KinderButtonFill } from './kinder_button';

// WIDTH AND HEIGHT OF SCREEN
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Sign In',
    headerTransparent: true,
    headerTintColor: '#fff'
  }

  constructor(props) {
    super(props);

    this.state = {
      loginEmail: '',
      loginPassword: ''
    };
  }

  _storeData = async (loginEmail, loginType) => {
    try {
      await AsyncStorage.setItem("loginEmail", String(loginEmail));
      await AsyncStorage.setItem("loginType", String(loginType));
    } catch (error) {
      throw error;
    }
  }

  userLogin = () => {
    // NAVIGATE TO TeacherHomePage

    fetch('http://192.168.1.143:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        loginEmail: this.state.loginEmail,
        loginPassword: this.state.loginPassword
      })
    })
      .then(res => res.json())
      .then(response => {
        if (response.success) {
          // IF LOGIN SUCCESSFULL

          // CHECK THE LOGIN TYPE
          if (response.loginType == "parent") {
            // IF PARENT

            // STORE THE LOGIN DATA
            this._storeData(response.loginEmail, response.loginType);

            this.props.navigation.navigate("ParentHomePage");
          } else if (response.loginType == "staff") {
            // IF STAFF

            // STORE THE LOGIN DATA
            this._storeData(response.loginEmail, response.loginType);

            // NAVIGATE TO TEACHER HOME PAGE
            this.props.navigation.navigate("TeacherHomePage");
          } else {
            alert("INVALID LOGIN TYPE");
          }

        } else {
          // LOGIN FAILED
          alert("INVALID DETAILS");
        }
      });
  }

  forgotPassword = () => {
    // CHECK EMAIL IS FILLED
    if (this.state.loginEmail !== '') {
      // SEND THE POST REQUEST TO GET RESET CODE
      fetch('http://192.168.1.143:3000/forgotpassword', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: this.state.loginEmail })
      })
        .then(res => res.json())
        .then(response => alert(response.message))
        .catch(error => alert("ERROR"));
    } else {
      alert("EMPTY EMAIL");
    }
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
              color: '#fff',
              textAlign: 'center'
            }
          }>
            {" Welcome Back! "}
          </Text>

          <TextInput
            placeholder={"Email"}
            placeholderTextColor="#d1d1d1"
            onChangeText={loginEmail => this.setState({ loginEmail })}
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
            onChangeText={loginPassword => this.setState({ loginPassword })}
            style={
              {
                borderBottomColor: '#555',
                borderBottomWidth: 2,
                fontSize: 18,
                marginTop: 20,
                color: "#d1d1d1"
              }
            } />

          <View>
            <Text style={
              {
                textAlign: 'right',
                color: '#fff',
                marginTop: 5
              }
            } onPress={() => this.forgotPassword()}>Forgot Password?</Text>
          </View>

          <KinderButtonFill
            buttonTitle="Log In"
            onPress={() => this.userLogin()}
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

export default SignInScreen;

const styles = StyleSheet.create(
  {
    backgroundImageContainer: {
      flex: 1
    }
  }
);