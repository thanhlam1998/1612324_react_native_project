import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DefaultStyle from '../../../../globals/style'

const SectionCoursesItem = (props) => {
  return (
    <TouchableOpacity style={DefaultStyle.item}
    onPress={()=>props.navigation.navigate('CourseDetail', {item: props.item})}>
      <Image
        source={require('../../../../../assets/ic_course.jpg')}
        style={DefaultStyle.image}
      />
      <View style={DefaultStyle.contentMargin}>
        <Text style={DefaultStyle.title}>{props.item.title}</Text>
        <Text style={DefaultStyle.darkText}>{props.item.author}</Text>
        <Text
          style={DefaultStyle.darkText}
        >{`${props.item.level}  .  ${props.item.release}  .  ${props.item.duration}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SectionCoursesItem;
