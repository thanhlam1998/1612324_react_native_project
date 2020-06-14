import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DefaultStyle from '../../../globals/style'

// require('../../../../assets/ic_course.jpg')
const ListCourseItem = (props) => {
  return (
    <TouchableOpacity style={DefaultStyle.item_horizontal} 
                      onPress ={() => {props.navigation.navigate('CourseDetail', { item: props.item});}}>
      <Image source={props.item.imageUrl ? {uri: props.item.imageUrl}: require('../../../../assets/ic_course.jpg')} 
              style={[DefaultStyle.item_horizontal_image, {alignSelf: 'center'}]} 
              resizeMethod={"resize"}/>
      <View style={styles.container}>
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
  container: {
    flexGrow: 1,
    flex: 1,
    marginLeft:5,
    marginBottom: 5 
  }
});
