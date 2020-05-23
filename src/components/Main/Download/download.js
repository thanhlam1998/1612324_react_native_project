import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ListCourseItem from '../../../components/Courses/ListCoursesItem/list-course-item';
import { FlatList } from 'react-native-gesture-handler';
import DefaultStyle from '../../../globals/style'

const Download = () => {
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
      <View style={styles.header}>
        <Text>{courses.length > 1 ? courses.length + " courses" : courses.length + " course"}</Text>
        <TouchableOpacity onPress={() => alert('Removed')}>
          <Text>REMOVE ALL ></Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={courses}
        renderItem={({ item }) => <ListCourseItem item={item} />}
      ></FlatList>
    </View>
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
});
