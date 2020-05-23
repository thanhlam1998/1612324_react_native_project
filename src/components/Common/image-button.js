import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ImageButton = (props) => {
  return (
    <ImageBackground
      style={styles.button}
      source={{
        uri: !props.url
          ? 'https://image.freepik.com/free-vector/futuristic-technology-background-with-honeycombs_23-2148481277.jpg'
          : props.url,
      }}
    >
      <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  button: {
    height: 100,
    marginBottom: 5,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
