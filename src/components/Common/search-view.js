import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {themeContext} from'../../../data/Theme'

const SearchView = (props) => {
  const {theme} = useContext(themeContext)
  const styles = StyleSheet.create({
    view: {
      flexDirection: 'row'
    },
    textInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: 'gray',
      paddingStart: 5,
      color: theme.foreground
    },
  });
  return (
    <View style={styles.view}>
      <TextInput style={styles.textInput} placeholder="Từ khóa: " onChangeText={text => props.setText(text)}/>
      <Button
        onPress = {props.onPress}
        title="Tìm kiếm"
      />  
    </View>
  );
};

export default SearchView;


