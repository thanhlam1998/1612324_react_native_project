import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchView from '../../Common/search-view';
import DefaultStyle from '../../../globals/style'
import {themeContext} from '../../../../data/Theme'

const Search = () => {
  const {theme} = useContext(themeContext)
  return (
    <ScrollView style={{backgroundColor: theme.background}}>
      <View style={DefaultStyle.marginForLayout}>
          <SearchView onPress={()=>alert("Search clicked!!!")}/>
      </View>
    </ScrollView>
  )
};

export default Search;

const styles = StyleSheet.create({});
