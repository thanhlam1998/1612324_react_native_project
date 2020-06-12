import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DefaultStyle from '../../../globals/style';
import { ScrollView } from 'react-native-gesture-handler';
import ImageButton from '../../Common/image-button';
import SectionBrowse from '../Browse/SectionBrowse/section-browse';
import MaterialcomunnityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {BrowseTitle} from '../../../globals/constants'

const Browse = (props) => {


  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <MaterialcomunnityIcons name="account-circle" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialcomunnityIcons name="settings" size={25} />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  const titles = ['', BrowseTitle.PopularSkills, BrowseTitle.Paths, BrowseTitle.TopAuthors];
  return (
    <ScrollView
      style={DefaultStyle.marginForLayout}
      showsVerticalScrollIndicator={false}>
      <ImageButton
        title="NEW RELEASE"
        url={
          'https://www.conceptdata.co.uk/images/blog/blog-flat-wallpapers.gif'
        }
      />
      <ImageButton
        title="RECOMMEND FOR YOU"
        url={
          'https://hd-background.com/wp-content/uploads/2019/12/blue-vector-wallpaper-7216-hd-wallpapers.jpg'
        }
      />
      {titles.map((title, key) => (
        <SectionBrowse key={key} title={title} />
      ))}
    </ScrollView>
  );
};

export default Browse;

const styles = StyleSheet.create({
    iconContainer:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 120
    }
});
