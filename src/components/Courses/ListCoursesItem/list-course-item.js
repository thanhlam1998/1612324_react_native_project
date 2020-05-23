import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DefaultStyle from '../../../globals/style'

const ListCourseItem = (props) => {
  return (
    <TouchableOpacity style={DefaultStyle.item_horizontal}>
      <Image source={require('../../../../assets/ic_course.jpg')} style={DefaultStyle.item_horizontal_image} />
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

export default ListCourseItem;

const styles = StyleSheet.create({
});
