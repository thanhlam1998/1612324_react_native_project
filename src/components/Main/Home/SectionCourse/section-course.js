import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import SectionCoursesItem from '../SectionCourseItem/section-courses-item'

const SectionCourses = (props) => {
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
  ];
  
  const renderListItems = (courses) => {
    return courses.map(item => <SectionCoursesItem item = {item}/>)
  }

  return (
    <View>
      <View>
        <Text>{props.title}</Text>
      </View>
      <ScrollView horizontal={true}>
        {renderListItems(courses)}
      </ScrollView>
    </View>
  );
};

export default SectionCourses;
