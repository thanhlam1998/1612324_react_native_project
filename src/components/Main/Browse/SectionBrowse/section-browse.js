import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import SectionCategoryItem from '../SectionBrowseItem/section-category-item';
import SectionPopularSkillItem from '../SectionBrowseItem/section-popular-skill-item';
import SectionPathItem from '../SectionBrowseItem/section-path-item';
import SectionTopAuthorItem from '../SectionBrowseItem/section-top-author-item';

const SectionBrowse = (props) => {
  const categories = [
    {
      url:
        'https://media-s3-us-east-1.ceros.com/pluralsight/images/2019/02/21/c383cb821a3f063d7d5eea48ba811b3a/13.png',
    },
    {
      url:
        'https://media-s3-us-east-1.ceros.com/pluralsight/images/2019/02/21/c383cb821a3f063d7d5eea48ba811b3a/13.png',
    },
    {
      url:
        'https://media-s3-us-east-1.ceros.com/pluralsight/images/2019/02/21/c383cb821a3f063d7d5eea48ba811b3a/13.png',
    },
    {
      url:
        'https://media-s3-us-east-1.ceros.com/pluralsight/images/2019/02/21/c383cb821a3f063d7d5eea48ba811b3a/13.png',
    },
    {
      url:
        'https://media-s3-us-east-1.ceros.com/pluralsight/images/2019/02/21/c383cb821a3f063d7d5eea48ba811b3a/13.png',
    },
    {
      url:
        'https://media-s3-us-east-1.ceros.com/pluralsight/images/2019/02/21/c383cb821a3f063d7d5eea48ba811b3a/13.png',
    },
    {
      url:
        'https://media-s3-us-east-1.ceros.com/pluralsight/images/2019/02/21/c383cb821a3f063d7d5eea48ba811b3a/13.png',
    },
    {
      url:
        'https://media-s3-us-east-1.ceros.com/pluralsight/images/2019/02/21/c383cb821a3f063d7d5eea48ba811b3a/13.png',
    },
    {
      url:
        'https://media-s3-us-east-1.ceros.com/pluralsight/images/2019/02/21/c383cb821a3f063d7d5eea48ba811b3a/13.png',
    },
    {
      url:
        'https://media-s3-us-east-1.ceros.com/pluralsight/images/2019/02/21/c383cb821a3f063d7d5eea48ba811b3a/13.png',
    },
  ];

  const skills = [
    {
      name: 'Javascript',
    },
    {
      name: 'Node.js',
    },
    {
      name: 'React',
    },
    {
      name: 'Android',
    },
    {
      name: 'Angular',
    },
    {
      name: 'C#',
    },
    {
      name: 'Java',
    },
    {
      name: 'Data Analysis',
    },
  ];

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

  const topAuthors=[
      {
          url: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
          name:"Dr. Sunny Wear"
      },
      {
          url: "https://images-na.ssl-images-amazon.com/images/I/61I7fMiSpTL._AC_SL1000_.jpg",
          name: "Leonardo Di Carprio"
      },
      {
          url: "https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-5.jpg",
          name: "Jindo"
      },
      {
          url: "https://post.healthline.com/wp-content/uploads/2019/09/man-city-urban-walking-serious-732x549-thumbnail.jpg",
          name: "Jim Cook"
      },
      {
          url: "https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg",
          name: "Michael Teske"
      },
      {
          url: "https://companynewheroes.com/files/2019/09/Lucas-De-Man-Fotograaf-Anne-Harbers-2-1024x683-960x514.jpg?x54139",
          name: " Mark"
      },
  ]

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
          {props.title !== titles.PopularSkills && <TouchableOpacity>
            <Text>See all ></Text>
          </TouchableOpacity>}
        </View>
      )}
        {!props.title && (
          <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}>
            <FlatList
              contentContainerStyle={{ alignSelf: 'flex-start' }}
              data={categories}
              numColumns={categories.length / 2}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <SectionCategoryItem item={item}></SectionCategoryItem>
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
