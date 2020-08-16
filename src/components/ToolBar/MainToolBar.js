import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialcomunnityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScreenKey} from '../../globals/constants'

const MainToolBar = (props) => {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity>
        <MaterialcomunnityIcons name="account-circle" size={25} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate(ScreenKey.SettingScreen)}>
        <MaterialcomunnityIcons name="settings" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default MainToolBar;
const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 120,
  },
});
