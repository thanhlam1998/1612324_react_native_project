import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DefaultStyle from '../../../globals/style'
import {themeContext} from '../../../../data/Theme'

// require('../../../../assets/ic_course.jpg')
const AuthorItem = (props) => {
  const {theme} = useContext(themeContext)
  return (
    <TouchableOpacity style={DefaultStyle.item_horizontal} 
                      onPress ={() => {props.navigation.navigate('CourseDetail', {item: props.item});}}>
      <Image source={props.item.avatar ? {uri: props.item.avatar}: require('../../../../assets/ic_course.jpg')} 
              style={[circleImage, {alignSelf: 'center'}]} 
              resizeMethod={"resize"}/>
      <View style={styles.container}>
        <Text style={[DefaultStyle.title, {color: theme.foreground}]}>{props.item.name}</Text>
        <Text style={DefaultStyle.darkText}>{`${props.item.numcourses} khóa học`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuthorItem;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    marginLeft:5,
    marginBottom: 5 
  },
  circleImage: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    backgroundColor:'#fff',
    borderRadius:50,
  }
});
