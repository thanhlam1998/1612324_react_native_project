import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import SectionCategoryItem from '../SectionBrowseItem/section-category-item';
import SectionPopularSkillItem from '../SectionBrowseItem/section-popular-skill-item';
import SectionPathItem from '../SectionBrowseItem/section-path-item';
import SectionTopAuthorItem from '../SectionBrowseItem/section-top-author-item';
import {skillsContext} from '../../../../../data/Skills'
import {bigTopicsContext} from '../../../../../data/BigTopics'
import {authorsContext} from '../../../../../data/Authors'

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

  const paths = [
    {
      title: 'Security in Google Cloud',
      total: 3,
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
          {props.title !== titles.PopularSkills && props.title !== titles.TopAuthors && <TouchableOpacity>
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
                <SectionCategoryItem item={item} title={item.name}></SectionCategoryItem>
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
            renderItem={({ item }) => <SectionPathItem item={item} />}
          ></FlatList>
        )}
        {props.title === titles.TopAuthors && (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={topAuthors}
            renderItem={({ item }) => <SectionTopAuthorItem item={item} />}
          ></FlatList>
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
