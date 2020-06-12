import React, { useContext } from 'react';
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
import {HomeTitle} from '../../../../globals/constants'

/* ----------------------------- Import Context ----------------------------- */
import {CoursesContext} from '../../../../../data/ListCourseDetail'
import {bigTopicsContext} from '../../../../../data/BigTopics'

const SectionCourses = (props) => {
  const courses = useContext(CoursesContext)
  const bigsTopic = useContext(bigTopicsContext)
  const softwareDevelopment = bigsTopic.softwareDevelopment;
  const softwareDev = courses.filter(item => softwareDevelopment.trending.includes(item.id))
  var ITOperations = bigsTopic.ITOperations;
  ITOperations = courses.filter(item=> ITOperations.trending.includes(item.id))
  var DataProfessional = bigsTopic.DataProfessional;
  DataProfessional = courses.filter(item=> DataProfessional.trending.includes(item.id))
  const courseList = courses.slice(0,5)
  var data;
  switch (props.title){
    case HomeTitle.SoftwareDevelopment:
      data = softwareDev;
      break;
    case HomeTitle.CourseList:
      data = courseList;
      break;
    case HomeTitle.ITOperation:
      data = ITOperations;
      break;
    case HomeTitle.DataProfessional:
      data = DataProfessional;
      break;
  }

  return (
    <View>
      {(props.title === HomeTitle.SoftwareDevelopment ||
        props.title === HomeTitle.CourseList || 
        props.title === HomeTitle.ITOperation ||
        props. title === HomeTitle.DataProfessional) && (
        <View>
          <View style={styles.header}>
            <Text>{props.title}</Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ListCourse', { name: props.title, data: data });
              }}
            >
              <Text>See all ></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({ item }) => <SectionCoursesItem navigation={props.navigation} item={item} />}
          ></FlatList>
        </View>
      )}
      {(props.title === HomeTitle.MyPath) && (
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
            data={courseList}
            renderItem={({ item }) => <SectionFeaturePath item={item} />}
          ></FlatList>
        </View>
      )}
      {props.title === HomeTitle.MyChannel && (
        <View>
          <View style={styles.header}>
            <Text>{props.title}</Text>
            <TouchableOpacity>
              <Text>See all ></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            data={courseList}
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
