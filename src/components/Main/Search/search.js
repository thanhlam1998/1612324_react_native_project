import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchView from '../../Common/search-view';
import DefaultStyle from '../../../globals/style'
import {themeContext} from '../../../../data/Theme'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()
const Search = () => {
  const {theme} = useContext(themeContext)
  const [searchText, setSearchText] = useState()
  function ContentScreen() {
    return (
      <View style={styles.marginView}>
        
      </View>
    );
  }
  
  function TranscriptScreen() {
    return (
      <View style={styles.marginView}>
        
      </View>
    );
  }
  return (
    <ScrollView style={{backgroundColor: theme.background}}>
      <View style={DefaultStyle.marginForLayout}>
          <SearchView onPress={()=>alert("Search clicked!!!")}/>
      </View>
      {searchText && (
        <Tab.Navigator tabBarOptions={{
          style: {
            backgroundColor: theme.background,
          }, 
          labelStyle: {
            color: theme.foreground
          },
          indicatorStyle: {
            backgroundColor: theme.foreground
          }
        }}>
          <Tab.Screen name ="Tất cả" component={ContentScreen} options={{title: "TẤT CẢ"}}/>
          <Tab.Screen name ="Khóa học" component={TranscriptScreen} options={{title: "KHÓA HỌC"}}/>
          <Tab.Screen name ="Tác giả" component={TranscriptScreen} options={{title: "GIẢNG VIÊN"}}/>
        </Tab.Navigator>
      )}
    </ScrollView>
  )
};

export default Search;

const styles = StyleSheet.create({});
