import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import SectionCourse from './SectionCourse/section-course';
import ImageButton from '../../Common/image-button';
import DefaultStyle from '../../../globals/style'
import { ScreenKey } from '../../../globals/constants';
import MaterialcomunnityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


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
    'Continue learning',
    'Featured Paths',
    'Featured Channels',
    'Course List',
    'My paths',
    'My channels',
  ];
  const onPressNewReleases = () => {
    alert('Press on new release');
  };
  return (
    <ScrollView style={DefaultStyle.marginForLayout}
    showsVerticalScrollIndicator={false}>
      <ImageButton title="Visual Studio" onPress={onPressNewReleases} />
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
