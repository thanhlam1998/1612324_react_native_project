import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import SectionCategoryItem from '../SectionBrowseItem/section-category-item';
import SectionPopularSkillItem from '../SectionBrowseItem/section-popular-skill-item';
import SectionPathItem from '../SectionBrowseItem/section-path-item';
import {skillsContext} from '../../../../../data/Skills'
import {bigTopicsContext} from '../../../../../data/BigTopics'
import {authorsContext} from '../../../../../data/Authors'
import {pathContext} from '../../../../../data/Paths'
import ListAuthors from '../../../Authors/ListAuthors/list-authors'

const SectionBrowse = (props) => {
  const skillContext = useContext(skillsContext)
  const skills = skillContext.skills;
  var popularSkills = skillContext.popularSkills;
  popularSkills = skills.filter(item => popularSkills.includes(item.id))

  var categoriesContext = useContext(bigTopicsContext)
  categoriesContext = Object.keys(categoriesContext).map(function(key){
    return key, categoriesContext[key]
  })
  
  const allAuthors = useContext(authorsContext)
  const topAuthors = allAuthors.authors.filter(item => allAuthors.topAuthors.includes(item.id))

  const allPaths = useContext(pathContext)
  const paths = allPaths.slice(0,8)

  const titles = {
    none: '',
    PopularSkills: 'Popular Skills',
    Paths: 'Paths',
    TopAuthors: 'Top Authors',
  };
  return (
    <View style={styles.marginForView}>
      {props.title !== '' && (
        <View style={styles.header}>
          <Text>{props.title}</Text>
          {props.title === titles.Paths && 
          <TouchableOpacity onPress={() => props.navigation.navigate("ListPaths", {name: props.title, data: allPaths})}>
            <Text>See all ></Text>
          </TouchableOpacity>}  
        </View>
      )}
        {!props.title && (
          <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}>
            <FlatList
              contentContainerStyle={{ alignSelf: 'flex-start' }}
              data={categoriesContext}
              numColumns={categoriesContext.length / 2}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <SectionCategoryItem item={item} navigation={props.navigation}></SectionCategoryItem>
              )}
            />
          </ScrollView>
        )}
        {props.title === titles.PopularSkills && (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={skills}
            renderItem={({ item }) => <SectionPopularSkillItem item={item} />}
          ></FlatList>
        )}
        {props.title === titles.Paths && (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={paths}
            renderItem={({ item }) => <SectionPathItem item={item} navigation={props.navigation}/>}
          ></FlatList>
        )}
        {props.title === titles.TopAuthors && (
          <ListAuthors data={topAuthors}/>
        )}
    </View>
  );
};

export default SectionBrowse;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  }, 
  marginForView: {
      marginBottom: 10
  }
});
