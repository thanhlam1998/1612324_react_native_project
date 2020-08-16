import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DefaultStyle from '../../../globals/style'
import {themeContext} from '../../../../data/Theme'

// require('../../../../assets/ic_course.jpg')
const ListCourseItem = (props) => {
  const {theme} = useContext(themeContext)
  return (
    <TouchableOpacity style={DefaultStyle.item_horizontal} 
                      onPress ={() => {props.navigation.navigate('CourseDetail', {item: props.item});}}>
      <Image source={props.item.imageUrl ? {uri: props.item.imageUrl}: require('../../../../assets/ic_course.jpg')} 
              style={[DefaultStyle.item_horizontal_image, {alignSelf: 'center'}]} 
              resizeMethod={"resize"}/>
      <View style={styles.container}>
        <Text style={[DefaultStyle.title, {color: theme.foreground}]}>{props.item.title || props.item.courseTitle}</Text>
        <Text style={DefaultStyle.darkText}>{props.item["instructor.user.name"] || props.item.subtitle || props.item.instructorName}</Text>
        {props.item.latestLearnTime && (
          <Text
            style={DefaultStyle.darkText}
          >{`Last time: ${props.item.latestLearnTime}`}</Text>
        )}
        {!props.item.latestLearnTime && (
          <Text
            style={DefaultStyle.darkText}
          >{`${props.item.updatedAt} . ${props.item.totalHours}h`}</Text>
        )}
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
