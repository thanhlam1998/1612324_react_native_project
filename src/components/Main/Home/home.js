import React, { useLayoutEffect, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import SectionCourse from './SectionCourse/section-course';
import ImageButton from '../../Common/image-button';
import DefaultStyle from '../../../globals/style'
import { ScreenKey } from '../../../globals/constants';
import MaterialcomunnityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MainToolBar from '../../ToolBar/MainToolBar'
import {HomeTitle} from '../../../globals/constants'
import {themeContext} from '../../../../data/Theme'



const Home = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => 
      <MainToolBar navigation={props.navigation}/>
    })
  })

  const titles = [
    HomeTitle.TopSell,
    HomeTitle.TopNew,
    HomeTitle.TopRate,
    HomeTitle.CourseList,
    HomeTitle.MyPath,
    HomeTitle.MyChannel,
    HomeTitle.MyBookmark
  ];

  const {theme} = useContext(themeContext)
  return (
    <ScrollView style={{backgroundColor: theme.background}}>
      <ScrollView style={[DefaultStyle.marginForLayout]}
      showsVerticalScrollIndicator={false}>
        <ImageButton url="https://www.pluralsight.com/content/pluralsight/en/jcr:content/image-res/file.transform/share-image/image.img.adf92adc-acea-4580-b408-a1d727cfbfaf.jpg"/>
        {titles.map((title, key) => (
          <SectionCourse navigation={props.navigation} key={key} title={title} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  iconContainer:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});
