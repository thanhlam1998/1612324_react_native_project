import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { login } from "../../core/services/authentication_services";
import { ScreenKey } from "../../globals/constants";
import { AuthenticationContext } from "../../provider/authentication-provider";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState();
  const authContext = useContext(AuthenticationContext);

  useEffect(() => {
    if (authContext.state.isAuthenticated) {
      props.navigation.navigate(ScreenKey.MainTabScreen);
    }
    if(authContext.state.data) {
      setStatus(authContext.state.data.data.message)
    }
  }, [authContext.state.isLoginLoading]);

  const handleLogin = () => {
    if (!username) {
      setStatus("Please input username");
      return;
    }
    if (!password) {
      setStatus("Please input password");
      return;
    }
    authContext.login(username, password);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
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
      <Text style={styles.message}>{status}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => {
          props.navigation.navigate(ScreenKey.RegisterScreen);
        }}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {
          props.navigation.navigate(ScreenKey.ForgotPasswordScreen);
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
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  textInput: {
    height: 48,
    marginTop: 20,
    width: "100%",
    borderColor: "gray",
    textAlign: "center",
    borderWidth: 1,
  },
  button: {
    height: 48,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    backgroundColor: "red",
  },
  registerButton: {
    height: 48,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    backgroundColor: "gray",
  },
  forgotButton: {
    height: 48,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    backgroundColor: "lightgray",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    width: "100%",
  },
  message: {
    color: "red",
    textAlign: "center",
    width: "100%",
  },
});
