import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SectionCourse from './SectionCourse/section-course';
import ImageButton from '../../Common/image-button';
import DefaultStyle from '../../../globals/style'


const Home = (props) => {
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
});
