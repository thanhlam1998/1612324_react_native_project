import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DefaultStyle from '../../../../globals/style';

const SectionFeaturePath = (props) => {
  return (
    <TouchableOpacity style={DefaultStyle.item}>
      <Image
        source={require('../../../../../assets/ic_course.jpg')}
        style={DefaultStyle.image}
      />
      <View style={DefaultStyle.contentMargin}>
        <Text style={DefaultStyle.title}>{props.item.title}</Text>
        <Text style={DefaultStyle.darkText}>
          {props.item.total}{' '}
          {props.item.total > 0 ? <Text>courses</Text> : <Text>course</Text>}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SectionFeaturePath;
