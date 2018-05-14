/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Alert, Image

} from 'react-native';
import { strings } from './locales/i18n';
import I18n from 'react-native-i18n'
import GlobalFont from 'react-native-global-font'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {



  constructor(props) {
    super(props);
    this.state = {
      email: '', red: false,
      password: ''
    };

    I18n.locale = "en";
  

  }


  handleEmail = (text) => {


    this.setState({ email: text });



  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }

  login = (email, pass) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === true) {
      if (pass === "password") {
        this.setState({ red: false });
        Alert.alert('email: ' + email + ' password: ' + pass);
      } else {
        this.setState({ red: true });
        Alert.alert('Password is not valid');
      }
    } else {
      this.setState({ red: true });
      Alert.alert('email is not valid');
    }

  }

  localization = (l) => {

    I18n.locale = l;
    if(l == "zj"){
      GlobalFont.applyGlobal("ZawgyiOne");
    }else{
      GlobalFont.applyGlobal("myanmar3");
    }
  
    
    this.forceUpdate();
  }


  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.logo}
          source={require('./img/logo.png')} />

        <Text
          style={styles.title}
        >
          {strings('login.welcome')}
        </Text>
        <TextInput
          style={[styles.textinput, this.state.red && styles.red]}
          textcolor="red"
          placeholder={strings('login.email_placeholder')}
          placeholderTextColor="#99a3a4"
          underlineColorAndroid="transparent"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={[styles.textinput, this.state.red && styles.red]}
          placeholder={strings('login.password_placeholder')}
          placeholderTextColor="#99a3a4"
          underlineColorAndroid="transparent"
          onChangeText={this.handlePassword}
        />


        <TouchableOpacity
          style={styles.button}
          onPress={() => this.login(this.state.email, this.state.password)}>
          <Text style={styles.buttonText}>
            {strings('login.login_button')}
          </Text>
        </TouchableOpacity>



        <View style={styles.footer}>
          <TouchableOpacity

            onPress={() => this.localization("en")}>
            <Text style={styles.footerText}>
              EN
          </Text>
          </TouchableOpacity>

          <Text style={styles.footerTextMiddle}>
            
            </Text>


          <TouchableOpacity

            onPress={() => this.localization("un")}>
            <Text style={styles.footerText}>
              UN
            </Text>
          </TouchableOpacity>
          <Text style={styles.footerTextMiddle}>
            
            </Text>

          <TouchableOpacity

            onPress={() => this.localization("zj")}>
            <Text style={styles.footerText}>
              ZJ
            </Text>
          </TouchableOpacity>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textinput: {
    height: 40,
    width: 250,
    margin: 5,
    borderRadius: 5,
    fontSize: 15,
    color: '#000',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 25,
    margin: 15,
    textAlign: 'center',
    padding: 10,
    color: '#fff'
  },
  button: {
    height: 50,
    width: 250,
    margin: 20,
    backgroundColor: '#48c9b0',
    borderRadius: 5,
  },
  buttonText: {

    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    color: '#FFF'
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff'
  },
  footer: {
    position: 'absolute',
    left: 0, right: 0, bottom: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20
  },
  footerText: {
    color: '#fff',
    textDecorationLine: 'underline',
   fontSize : 15
  },
  footerTextMiddle: {
    color: '#fff', margin : 15

  },
  red: {
    borderColor: '#F00'
  }
});
