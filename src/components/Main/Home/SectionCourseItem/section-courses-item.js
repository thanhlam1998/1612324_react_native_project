import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const SectionCoursesItem = (props) => {
  return <View style = {styles.item}>
      <Image source={require('../../../../../assets/ic_course.jpg')} style={styles.image}/>
      <View style={{margin: 5}}>
          <Text style={{fontSize:16}}>{props.item.title}</Text>
          <Text style={styles.darkText}>{props.item.author}</Text>
          <Text style={styles.darkText}>{`${props.item.level}  .  ${props.item.release}  .  ${props.item.duration}`}</Text>
      </View>
  </View>;
};

export default SectionCoursesItem;

const styles = StyleSheet.create({
  item: {
    margin: 5,
    width: 200,
    height: 200,
    backgroundColor: '#F4F4F4'
  },
  image: {
      width: 200,
      height: 100,
      resizeMode: 'cover'
  },
  darkText:{
      color: '#888888'
  },
});
