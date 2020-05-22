import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const SearchView = (props) => {
  return (
    <View style={styles.view}>
      <TextInput style={styles.textInput} placeholder="Search text: " />
      <Button
        onPress={props.onPress}
        title="Search"
      />
    </View>
  );
};

export default SearchView;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    paddingStart: 5,
  },
});
