import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DefaultStyle from '../../../../globals/style'
import {themeContext} from '../../../../../data/Theme'

const SectionMyFavCourseItem = (props) => {
  const {theme} = useContext(themeContext)
  return (
    <TouchableOpacity style={[DefaultStyle.item, {backgroundColor: theme.middleground}]}
    onPress={()=>props.navigation.navigate('CourseDetail', {item: props.item})}>
      <Image
        source={props.item.courseImage ? {uri: props.item.courseImage} : require('../../../../../assets/ic_course.jpg')}
        style={DefaultStyle.image}
        resizeMethod={'resize'}
      />  
      <View style={DefaultStyle.contentMargin}>
        <Text style={[DefaultStyle.title, {color: theme.foreground}]}>{props.item.courseTitle}</Text>
        <Text style={DefaultStyle.darkText}>{props.item.instructorName || "unknown"}</Text>
        <Text
          style={DefaultStyle.darkText}
        >{`Last time: ${props.item.latestLearnTime}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SectionMyFavCourseItem;
