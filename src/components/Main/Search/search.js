import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchView from '../../Common/search-view';
import DefaultStyle from '../../../globals/style'

const Search = () => {
  return <View style={DefaultStyle.marginForLayout}>
      <SearchView onPress={()=>alert("Search clicked!!!")}/>
  </View>;
};

export default Search;

const styles = StyleSheet.create({});
