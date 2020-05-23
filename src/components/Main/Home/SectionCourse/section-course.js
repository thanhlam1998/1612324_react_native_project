import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import SectionCoursesItem from '../SectionItem/section-courses-item';
import SectionFeaturePath from '../SectionItem/section-feature-path';
import SectionFeatureChannel from '../SectionItem/section-feature-channel';
import SectionMyChannel from '../SectionItem/section-my-channel';
import { render } from 'react-dom';

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

  const featurePaths = [
    {
      title: 'Visual Studio',
      total: 10,
    },
    {
      title: 'Apllication Development on Microsoft Azure',
      total: 9,
    },
    {
      title: 'Angular',
      total: 14,
    },
    {
      title: 'Designing Microsoft Azure Applications',
      total: 8,
    },
    {
      title: 'C# Development Fundamental',
      total: 14,
    },
  ];

  const featureChannels = [
    {
      title: 'Microsoft Azure Developers',
      author: 'Pluralsight + Microsoft',
      total: 8227,
    },
    {
      title: 'Microsoft Azure Solution Architects',
      author: 'Pluralsight + Microsoft',
      total: 12481,
    },
    {
      title: 'Microsoft Azure Devops Engineers',
      author: 'Pluralsight + Microsoft',
      total: 2208,
    },
    {
      title: '.NET Developer on Microsoft Azure',
      author: 'Pluralsight + Microsoft',
      total: 689,
    },
    {
      title: 'Node.js Developer on Microsoft Azure',
      author: 'Pluralsight + Microsoft',
      total: 226,
    },
  ];

  const myChannel = [
    {
      title: 'react',
    },
  ];

  const title = {
    ContinueLearning: 'Continue learning',
    FeaturePath: 'Featured Paths',
    FeaturedChannels: 'Featured Channels',
    CourseList: 'Course List',
    MyPath: 'My paths',
    MyChannel: 'My channels',
  };

  return (
    <View>
      {(props.title === title.ContinueLearning ||
        props.title === title.CourseList) && (
        <View>
          <View style={styles.header}>
            <Text>{props.title}</Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ListCourse', { name: props.title });
              }}
            >
              <Text>See all ></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            data={courses}
            renderItem={({ item }) => <SectionCoursesItem item={item} />}
          ></FlatList>
        </View>
      )}
      {(props.title === title.FeaturePath || props.title === title.MyPath) && (
        <View>
          <View style={styles.header}>
            <Text>{props.title}</Text>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('ListPaths', { name: props.title })
              }
            >
              <Text>See all ></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            data={featurePaths}
            renderItem={({ item }) => <SectionFeaturePath item={item} />}
          ></FlatList>
        </View>
      )}
      {props.title === title.FeaturedChannels && (
        <View>
          <View style={styles.header}>
            <Text>{props.title}</Text>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('ListChannels', { name: props.title })
              }
            >
              <Text>See all ></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            data={featureChannels}
            renderItem={({ item }) => <SectionFeatureChannel item={item} />}
          ></FlatList>
        </View>
      )}
      {props.title === title.MyChannel && (
        <View>
          <View style={styles.header}>
            <Text>{props.title}</Text>
            <TouchableOpacity>
              <Text>See all ></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            data={myChannel}
            renderItem={({ item }) => <SectionMyChannel item={item} />}
          ></FlatList>
        </View>
      )}
    </View>
  );
};

export default SectionCourses;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
