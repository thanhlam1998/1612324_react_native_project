import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScreenKey } from '../../globals/constants';
import { themeContext } from '../../../App';

const SplashScreen = (props) => {

  const context = useContext(themeContext)
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    if(loading <100){
          var timer = setInterval(() => {
              setLoading((loading) => loading + 1);
          }, 10);
      } else{
          props.navigation.navigate(ScreenKey.LoginScreen)
      }
      return () => {
        clearInterval(timer);
      }; 
  }, [loading]);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.image}
      />
      <Text>Loading... {loading}</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
      width: 200,
      height: 200
  }
});
