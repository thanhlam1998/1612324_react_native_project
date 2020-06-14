import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import DefaultStyle from '../../../globals/style';
import SectionPopularSkillItem from '../../Main/Browse/SectionBrowseItem/section-popular-skill-item'
import SectionPathItem from '../../Main/Browse/SectionBrowseItem/section-path-item'
import SectionCourseItem from '../../Main/Home/SectionItem/section-courses-item'
import ListAuthor from '../../Authors/ListAuthors/list-authors'


/* ----------------------------- import context ----------------------------- */
import {skillsContext} from '../../../../data/Skills'
import {pathContext} from '../../../../data/Paths'
import {CoursesContext} from '../../../../data/Courses'
import {authorsContext} from '../../../../data/Authors'

const SectionTopics = (props) => {
  const title = {
    skills: props.data.name + ' Skills',
    paths: 'Paths in ' + props.data.name,
    new: 'New in ' + props.data.name,
    trending: 'Trending in ' + props.data.name,
    topAuthors: 'Top authors in ' + props.data.name,
  };

  if(props.data.skills.length > 0){
      const skill_context = useContext(skillsContext)
      var skills = skill_context.skills.filter(item => props.data.skills.includes(item.id))
  }

  if(props.data.paths.length > 0){
      const path_context = useContext(pathContext)
      var paths = path_context.filter(item => props.data.paths.includes(item.id))
  }

  if(props.data.new.length > 0){
    const course_context = useContext(CoursesContext)
    var news = course_context.filter(item => props.data.new.includes(item.id))
  }

  if(props.data.trending.length > 0){
    const course_context = useContext(CoursesContext)
    var trendings = course_context.filter(item => props.data.trending.includes(item.id))
  }

  if(props.data.topAuthors.length > 0){
    const author_context = useContext(authorsContext)
    var authors = author_context.authors.filter(item => props.data.topAuthors.includes(item.id))
  }

  return (
    <View style={DefaultStyle.marginForLayout}>
      {props.data.skills.length > 0 && (
        <View style={styles.marginForView}>
          <View style={styles.header}>
            <Text>{title.skills}</Text>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={skills}
            renderItem={({ item }) => <SectionPopularSkillItem item={item} />}
          ></FlatList>
        </View>
      )}
      {props.data.paths.length > 0 && (
        <View style={styles.marginForView}>
          <View style={styles.header}>
            <Text>{title.paths}</Text>
            <TouchableOpacity>
              <Text>See all ></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={paths}
            renderItem={({ item }) => <SectionPathItem item={item} />}
          ></FlatList>
        </View>
      )}
      {props.data.skills.length > 0 && (
        <View style={styles.marginForView}>
          <View style={styles.header}>
            <Text>{title.new}</Text>
            <TouchableOpacity>
              <Text>See all ></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={news}
            renderItem={({ item }) => <SectionCourseItem item={item} navigation={props.navigation}/>}
          ></FlatList>
        </View>
      )}
      {props.data.trending.length > 0 && (
        <View style={styles.marginForView}>
          <View style={styles.header}>
            <Text>{title.trending}</Text>
            <TouchableOpacity>
              <Text>See all ></Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={trendings}
            renderItem={({ item }) => <SectionCourseItem item={item} navigation={props.navigation}/>}
          ></FlatList>
        </View>
      )}
      {props.data.topAuthors.length > 0 && (
        <View style={styles.marginForView}>
          <View style={styles.header}>
            <Text>{title.topAuthors}</Text>
          </View>
          <ListAuthor data={authors}/>
        </View>
      )}
    </View>
  );
};

export default SectionTopics;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  marginForView: {
    marginBottom: 10
}
});
