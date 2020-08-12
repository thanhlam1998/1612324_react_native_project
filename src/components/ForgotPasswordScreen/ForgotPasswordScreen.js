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

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState()
  const authContext = useContext(AuthenticationContext);

  const createConfirmAlert = () => {
    Alert.alert(
      "Confirm register",
      "Please check your email to reset your password",[{
        text: "OK",
        onPress: () => props.navigation.navigate(ScreenKey.LoginScreen)
      }]
    )
  }

  useEffect(() => {
    authContext.state.data = null;
    authContext.state.isForgotpasswordSuccess = false;
  }, [])

  useEffect(() => {
    if(authContext.state.isForgotPasswordSuccess === true){
      createConfirmAlert()
    }
    if(authContext.state.data){
      setStatus(authContext.state.data.data.message)
    }
  }, [authContext.state.isForgotPasswordLoading])

  const handleConfirm = () => {
    if(!email){
      setStatus("Please input your email")
      return
    }
    authContext.forgotPassword(email);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.logo}></Image>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        textContentType="emailAddress"
        autoCompleteType= "email"
        defaultValue={email}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.message}>{status}</Text>
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

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
