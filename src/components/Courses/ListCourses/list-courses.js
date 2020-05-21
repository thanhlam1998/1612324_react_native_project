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
import DefaultStyle from '../../../globals/style'

const ListCourses = (props) => {
  const courses = [
    {
      title: 'Mobile',
      data: [
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
      ],
    },
    {
      title: 'Web',
      data: [
        {
          id: 1,
          title: 'Node js',
          author: 'Thanh Lam',
          level: 'Advance',
          release: 'May 11, 2020',
          duration: '10 hours',
        },
        {
          id: 2,
          title: 'React native',
          author: 'Thanh Lam',
          level: 'Intermediate',
          release: 'May 12, 2020',
          duration: '5 hours',
        },
        {
          id: 3,
          title: 'React js',
          author: 'Kianto',
          level: 'Intermediate',
          release: 'May 12, 2020',
          duration: '15 hours',
        },
      ],
    }
  ];

  const searchView = () => {
    return (
      <View style={{ flexDirection: 'row', margin: 5 }}>
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: 'gray',
            paddingStart: 5,
          }}
          placeholder="Search text: "
        />
        <Button
          onPress={() => {
            alert('Search button pressed');
          }}
          title="Search"
        />
      </View>
    );
  };

  return (
    <View style={DefaultStyle.marginForLayout}>
      <SectionList
        sections={courses}
        renderItem = {({item}) => <ListCourseItem item={item}/> }
        renderSectionHeader={({section:{title}}) => <View style={{backgroundColor: 'white'}}><Text>{title}</Text></View>}
        ListHeaderComponent={searchView}/>
    </View>
  );
};

export default ListCourses;

const styles = StyleSheet.create({});
