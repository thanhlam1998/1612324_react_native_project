import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DefaultStyle from '../../../../globals/style'
import {themeContext} from '../../../../../data/Theme'

const SectionCoursesItem = (props) => {
  const {theme} = useContext(themeContext)
  return (
    <TouchableOpacity style={[DefaultStyle.item, {backgroundColor: theme.middleground}]}
    onPress={()=>props.navigation.navigate('CourseDetail', {item: props.item})}>
      <Image
        source={props.item.imageUrl ? {uri: props.item.imageUrl} : require('../../../../../assets/ic_course.jpg')}
        style={DefaultStyle.image}
        resizeMethod={'resize'}
      />  
      <View style={DefaultStyle.contentMargin}>
        <Text style={[DefaultStyle.title, {color: theme.foreground}]}>{props.item.title}</Text>
        <Text style={DefaultStyle.darkText}>{props.item.author}</Text>
        <Text
          style={DefaultStyle.darkText}
        >{`${props.item.level} . ${props.item.release} . ${props.item.duration}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SectionCoursesItem;
