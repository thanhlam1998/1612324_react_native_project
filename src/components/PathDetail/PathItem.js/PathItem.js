import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import DefaultStyle from '../../../globals/style';

const PathItem = (props) => {
  return (
    <View style={DefaultStyle.item_horizontal}>
      <View>
        <View style={{backgroundColor:"#222222"}}>
          <Image
            source={props.item.imageUrl ? {uri: props.item.imageUrl} : require('../../../../assets/ic_course.jpg')}
            style={DefaultStyle.item_horizontal_image}
            resizeMethod={'resize'}
            resizeMode={'center'}
          />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={DefaultStyle.title}>{props.item.name}</Text>
        <Text style={DefaultStyle.darkText}>
          {props.item.courses.length}{' '}
          {props.item.courses.length > 0 ? <Text>courses</Text> : <Text>course</Text>}
        </Text>
      </View>
    </View>
  );
};

export default PathItem;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    marginLeft:5,
    marginBottom: 5 
  }
});
