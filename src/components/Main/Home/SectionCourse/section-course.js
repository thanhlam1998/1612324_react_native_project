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
import {CoursesContext} from '../../../../../data/Courses'
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
  var data, allData;
  switch (props.title){
    case HomeTitle.SoftwareDevelopment:
      allData = softwareDev;
      break;
    case HomeTitle.CourseList:
      allData = courseList;
      break;
    case HomeTitle.ITOperation:
      allData = ITOperations;
      break;
    case HomeTitle.DataProfessional:
      allData = DataProfessional;
      break;
  }
  if(allData){
    data = allData.slice(0,5)
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
                props.navigation.navigate('ListCourse', { name: props.title, data: props.title!==HomeTitle.CourseList ? data : courses});
              }}
            >
              <Text>See all ></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
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
