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
import {CoursesContext} from '../../../../data/ListCourseDetail'

const ListCourses = (props) => {
  const courses = useContext(CoursesContext)

  return (
    <View style={DefaultStyle.marginForLayout}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={courses}
        renderItem={({ item }) => <ListCourseItem item={item} />}
      />
    </View>
  );
};

export default ListCourses;

const styles = StyleSheet.create({});
