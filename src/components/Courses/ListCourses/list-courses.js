import React from 'react';
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

const ListCourses = (props) => {
  const courses = [
    {
      id: 1,
      title: 'React native',
      author: 'Thanh Lam',
      level: 'Advance',
      release: 'May 11, 2020',
      duration: '10 hours',
    },
    {
      id: 2,
      title: 'iOs',
      author: 'Thanh Lam',
      level: 'Intermediate',
      release: 'May 12, 2020',
      duration: '5 hours',
    },
    {
      id: 3,
      title: 'Android',
      author: 'Kianto',
      level: 'Intermediate',
      release: 'May 12, 2020',
      duration: '15 hours',
    },
    {
      id: 4,
      title: 'React native',
      author: 'Thanh Lam',
      level: 'Advance',
      release: 'May 11, 2020',
      duration: '10 hours',
    },
    {
      id: 5,
      title: 'iOs',
      author: 'Thanh Lam',
      level: 'Intermediate',
      release: 'May 12, 2020',
      duration: '5 hours',
    },
    {
      id: 6,
      title: 'Android',
      author: 'Kianto',
      level: 'Intermediate',
      release: 'May 12, 2020',
      duration: '15 hours',
    },
  ];

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
