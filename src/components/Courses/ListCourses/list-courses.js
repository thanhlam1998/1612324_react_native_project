import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SectionList,
} from 'react-native';
import ListCourseItem from '../ListCoursesItem/list-course-item';
import DefaultStyle from '../../../globals/style';
import { FlatList } from 'react-native-gesture-handler';
import {themeContext} from '../../../../data/Theme'

const ListCourses = (props) => {
  const {theme} = useContext(themeContext)
  return (
    <View style={{backgroundColor: theme.background}}>
      <View style={DefaultStyle.marginForLayout}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={props.route.params.data}
          renderItem={({ item }) => <ListCourseItem item={item} navigation={props.navigation}/>}
        />
      </View>
    </View>
  );
};

export default ListCourses;

const styles = StyleSheet.create({});
