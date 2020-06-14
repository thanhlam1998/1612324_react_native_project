import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import SectionCourse from './SectionCourse/section-course';
import ImageButton from '../../Common/image-button';
import DefaultStyle from '../../../globals/style'
import { ScreenKey } from '../../../globals/constants';
import MaterialcomunnityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {HomeTitle} from '../../../globals/constants'


const Home = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => 
      <View style = {styles.iconContainer}>
        <TouchableOpacity>
          <MaterialcomunnityIcons name="account-circle" size={25}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialcomunnityIcons name="settings" size={25}/>
        </TouchableOpacity>
      </View>
    })
  })

  const titles = [
    HomeTitle.SoftwareDevelopment,
    HomeTitle.ITOperation,
    HomeTitle.DataProfessional,
    HomeTitle.CourseList,
    HomeTitle.MyPath,
    HomeTitle.MyChannel,
    HomeTitle.MyBookmark
  ];
  return (
    <ScrollView style={DefaultStyle.marginForLayout}
    showsVerticalScrollIndicator={false}>
      <ImageButton url="https://www.pluralsight.com/content/pluralsight/en/jcr:content/image-res/file.transform/share-image/image.img.adf92adc-acea-4580-b408-a1d727cfbfaf.jpg"/>
      {titles.map((title, key) => (
        <SectionCourse navigation={props.navigation} key={key} title={title} />
      ))}
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
