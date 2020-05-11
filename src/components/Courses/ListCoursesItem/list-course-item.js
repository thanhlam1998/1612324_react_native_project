import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ListCourseItem = (props) => {
  return (
    <View style={styles.item}>
      <Image source={require('../../../../assets/ic_course.jpg')} style={styles.image} />
      <View style={{ margin: 5 }}>
        <Text style={{ fontSize: 16 }}>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.author}</Text>
        <Text
          style={styles.darkText}
        >{`${props.item.level}  .  ${props.item.release}  .  ${props.item.duration}`}</Text>
      </View>
    </View>
  );
};

export default ListCourseItem;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        margin: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    image: {
        width: 100,
        height: 50,
        resizeMode: 'cover'
    },
    darkText:{
        color: '#888888'
    },
});
