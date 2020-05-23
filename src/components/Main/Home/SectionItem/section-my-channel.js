import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DefaultStyle from '../../../../globals/style';

const SectionMyChannel = (props) => {
  return (
    <TouchableOpacity style={DefaultStyle.item}>
      <Image
        source={require('../../../../../assets/ic_course.jpg')}
        style={DefaultStyle.image}
      />
      <View style={DefaultStyle.contentMargin}>
        <Text style={DefaultStyle.title}>{props.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SectionMyChannel;
