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
import { ScreenKey } from "../../globals/constants";
import { AuthenticationContext } from "../../provider/authentication-provider";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState();
  const authContext = useContext(AuthenticationContext);

  const createConfirmAlert = () => {
    Alert.alert(
      "Confirm register",
      "Please sign in your email and activate your account",[{
        text: "OK",
        onPress: () => props.navigation.navigate(ScreenKey.LoginScreen)
      }]
    )
  }

  useEffect(() => {
    if (authContext.state.isRegisterSuccess === true) {
      createConfirmAlert();
    } else {
      console.log(authContext.state)
    }
  }, [authContext.state.isRegisterSuccess]);

  const handleRegister = () => {
    if(!username){
      setStatus("Please input username")
      return
    }
    if(!email){
      setStatus("Please input email")
      return
    }
    if(!phone){
      setStatus("Please input your phone")
      return
    }
    if(!password){
      setStatus("Please input password")
      return
    }
    authContext.register(username, email, phone, password);
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
        placeholder="Email"
        textContentType="emailAddress"
        autoCompleteType= "email"
        defaultValue={email}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Phone"
        defaultValue={phone}
        keyboardType="phone-pad"
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry
        defaultValue={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={styles.message}>{status}</Text>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

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
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    width: "100%",
  },
  message: {
    color: 'red',
    textAlign: "center",
    width: "100%",
  }
});
