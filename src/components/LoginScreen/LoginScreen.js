import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, TextInput } from 'react-native';
import {login} from '../../core/services/authentication_services'
import { ScreenKey } from '../../globals/constants';
import {AuthenticationContext} from '../../provider/authentication-provider'

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState();
  const authContext  = useContext(AuthenticationContext)

  useEffect(() => {
    if(authContext.state.isAuthenticated){
        props.navigation.navigate(ScreenKey.MainTabScreen)
    } 
  }, [authContext.state.isAuthenticated])

  const renderLoginStatus = (status) => {
    if(!status){
      return <View/>
    } else if(status.status === 200){
      return <Text>Login successed!</Text>
    } else {
      return <Text>{status.errorString}</Text>
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}></Image>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        defaultValue={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry
        defaultValue={password}
        onChangeText={(text) => setPassword(text)}
      />
      {renderLoginStatus(status)}
      <TouchableOpacity style={styles.button}
      onPress={() => {
          authContext.login(username, password)
      }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton}
      onPress={() => {
         props.navigation.navigate(ScreenKey.RegisterScreen)
      }}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotButton}
      onPress={() => {
         
      }}>
        <Text style={styles.buttonText}>Forgot password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: 'column',
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  textInput: {
    height: 48,
    marginTop: 20,
    width: '100%',
    borderColor: 'gray',
    textAlign: "center",
    borderWidth: 1,
  },
  button: {
    height: 48,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf:"center",
    width: '100%',
    backgroundColor: 'red',
  },
  registerButton: {
    height: 48,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf:"center",
    width: '100%',
    backgroundColor: 'gray',
  },
  forgotButton: {
    height: 48,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf:"center",
    width: '100%',
    backgroundColor: 'lightgray',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: "center",
    width: '100%',
  },
});
