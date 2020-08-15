import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import SectionCategoryItem from "../SectionBrowseItem/section-category-item";
import SectionPopularSkillItem from "../SectionBrowseItem/section-popular-skill-item";
import SectionPathItem from "../SectionBrowseItem/section-path-item";
import { skillsContext } from "../../../../../data/Skills";
import { bigTopicsContext } from "../../../../../data/BigTopics";
import { authorsContext } from "../../../../../data/Authors";
import { pathContext } from "../../../../../data/Paths";
import ListAuthors from "../../../Authors/ListAuthors/list-authors";
import { themeContext } from "../../../../../data/Theme";

const image = [
  "https://cdn.dribbble.com/users/46822/screenshots/1335062/stars.jpg",
  "https://i.pinimg.com/originals/ff/89/62/ff8962804b20adfa99e3d67334d7e00a.jpg",
  "https://cdn.hipwallpaper.com/i/92/55/F38NZ5.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20190222/ourmid/pngtree-cartoon-fresh-blue-underwater-diving-background-worldcartoonseabackground-display-boardadbackground-image_54824.jpg",
  "https://t3.ftcdn.net/jpg/03/34/23/00/240_F_334230086_BWzQmPaiZyJk5ImnIRixEcq3qcaSEY2G.jpg",
  "https://img.freepik.com/free-vector/gradient-geometric-shape-background_78532-312.jpg?size=626&ext=jpg",
  "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Circle-Simple-Background-Image-1.jpg",
  "https://ak.picdn.net/shutterstock/videos/13361483/thumb/1.jpg",
];

const SectionBrowse = (props) => {
  const { category, setCategory } = useState();

  const { data } = props;

  const { theme } = useContext(themeContext);
  const skillContext = useContext(skillsContext);
  const skills = skillContext.skills;
  var popularSkills = skillContext.popularSkills;
  popularSkills = skills.filter((item) => popularSkills.includes(item.id));

  var categoriesContext = useContext(bigTopicsContext);
  categoriesContext = Object.keys(categoriesContext).map(function (key) {
    return key, categoriesContext[key];
  });

  const allAuthors = useContext(authorsContext);
  const topAuthors = allAuthors.authors.filter((item) =>
    allAuthors.topAuthors.includes(item.id)
  );

  const allPaths = useContext(pathContext);
  const paths = allPaths.slice(0, 8);

  const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    },
    marginForView: {
      marginBottom: 10,
    },
    textColorTheme: {
      color: theme.foreground,
    },
  });

  const titles = {
    none: "",
    PopularSkills: "Popular Skills",
    Paths: "Paths",
    TopAuthors: "Top Authors",
  };
  return (
    <View style={styles.marginForView}>
      {props.title !== "" && (
        <View style={styles.header}>
          <Text style={styles.textColorTheme}>{props.title}</Text>
          {props.title === titles.Paths && (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("ListPathsBrowse", {
                  name: props.title,
                  data: allPaths,
                })
              }>
              <Text style={styles.textColorTheme}>See all ></Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      {!props.title && data && (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlatList
            contentContainerStyle={{ alignSelf: "flex-start" }}
            data={data}
            numColumns={data.length / 2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <SectionCategoryItem
                item={item}
                imageUrl={image[index]}
                navigation={props.navigation}></SectionCategoryItem>
            )}
          />
        </ScrollView>
      )}
      {props.title === titles.PopularSkills && (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={skills}
          renderItem={({ item }) => (
            <SectionPopularSkillItem item={item} />
          )}></FlatList>
      )}
      {props.title === titles.Paths && (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={paths}
          renderItem={({ item }) => (
            <SectionPathItem item={item} navigation={props.navigation} />
          )}></FlatList>
      )}
      {props.title === titles.TopAuthors && <ListAuthors data={topAuthors} />}
    </View>
  );
};

export default SectionBrowse;
