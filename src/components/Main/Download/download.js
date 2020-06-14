import React, { useLayoutEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import ListCourseItem from '../../../components/Courses/ListCoursesItem/list-course-item';
import { FlatList } from 'react-native-gesture-handler';
import DefaultStyle from '../../../globals/style'
import MaterialcomunnityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {myAccountContext} from '../../../../data/MyAccount'
import {CoursesContext} from '../../../../data/Courses'


const Download = (props) => {

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => 
      <View style = {styles.iconContainer}>
        <TouchableOpacity >
          <MaterialcomunnityIcons name="account-circle" size={25}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialcomunnityIcons name="settings" size={25}/>
        </TouchableOpacity>
      </View>
    })
  })

/* -------------------------- Get data from context ------------------------- */
  const courses = useContext(CoursesContext)
  const {download, setDownload} = useContext(myAccountContext);
  const myDownload = courses.filter(item => download.includes(item.id))

  return (
    <ScrollView style={DefaultStyle.marginForLayout} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text>{myDownload.length}{myDownload.length > 1 ? " courses" :" course"}</Text>
        <TouchableOpacity onPress={() => setDownload([])}>
          <Text>REMOVE ALL ></Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={myDownload}
        renderItem={({ item }) => <ListCourseItem item={item} />}
      ></FlatList>
    </ScrollView>
  );
};

export default Download;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5
  },
  iconContainer:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});
