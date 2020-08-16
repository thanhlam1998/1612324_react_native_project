import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DefaultStyle from '../../../globals/style'
import {themeContext} from '../../../../data/Theme'

// require('../../../../assets/ic_course.jpg')
const CourseItem = (props) => {
  const {theme} = useContext(themeContext)
  return (
    <TouchableOpacity style={DefaultStyle.item_horizontal} 
                      onPress ={() => {props.navigation.navigate('CourseDetail', {item: props.item});}}>
      <Image source={props.item.imageUrl ? {uri: props.item.imageUrl}: require('../../../../assets/ic_course.jpg')} 
              style={[DefaultStyle.item_horizontal_image, {alignSelf: 'center'}]} 
              resizeMethod={"resize"}/>
      <View style={styles.container}>
        <Text style={[DefaultStyle.title, {color: theme.foreground}]}>{props.item.title}</Text>
        <Text style={DefaultStyle.darkText}>{props.item.name}</Text>
        <Text
          style={DefaultStyle.darkText}
        >{`${props.item.updatedAt} . ${props.item.totalHours}h`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CourseItem;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    marginLeft:5,
    marginBottom: 5 
  }
});
