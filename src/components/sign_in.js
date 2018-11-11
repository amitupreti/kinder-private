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

class SignInScreen extends Component {
    static navigationOptions = {
      title : 'Sign In',
      headerTransparent: true,
      headerTintColor: '#fff'
    }
  
    render() {
      return (
        <View>
          <View style = { styles.backgroundImageContainer }>
            <Image 
              source = 
              { 
                BackgroundImage 
              } 
              style = 
              { 
                { 
                  width : SCREEN_WIDTH, 
                  height : SCREEN_HEIGHT 
                } 
              } 
              blurRadius = { 10 }
            />
          </View>
  
          <View 
              behavior = "padding"
            style = {
              {
                marginTop: SCREEN_HEIGHT / 2 - 100,
                paddingLeft: 40,
                paddingRight: 40
              }
          }>
              <Text style = {
                {
                  fontSize: 30, 
                  color: '#fff',
                  textAlign: 'center'
                }
              }>
                { " Welcome Back! " }
              </Text>
  
              <TextInput 
                placeholder = { "Email" } 
                placeholderTextColor = "#d1d1d1" 
                style = {
                  {
                    borderBottomColor: '#555',
                    borderBottomWidth: 2,
                    fontSize: 18,
                    marginTop: 20,
                    color: "#d1d1d1"
                  }
                }/>
  
                <TextInput 
                placeholder = { "Password" } 
                secureTextEntry = {true}
                placeholderTextColor = "#d1d1d1" 
                style = {
                  {
                    borderBottomColor: '#555',
                    borderBottomWidth: 2,
                    fontSize: 18,
                    marginTop: 20,
                    color: "#d1d1d1"
                  }
                }/>
  
                <View>
                  <Text style={
                    {
                      textAlign: 'right',
                      color: '#fff',
                      marginTop: 5
                    }
                  } onPress = { () => alert("OK") }>Forgot Password?</Text>
                </View>
  
                <KinderButtonFill 
                  buttonTitle = "Log In"
                  navigateTo = { this.props.navigation }
                  navigationScreen = "TeacherHomePage"
                  style = {
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
      backgroundImageContainer : {
        flex : 1
      }
    }
  );