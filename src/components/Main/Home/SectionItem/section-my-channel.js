import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import itemStyle from '../../../../globals/style';

const SectionMyChannel = (props) => {
  return (
    <View style={itemStyle.item}>
      <Image
        source={require('../../../../../assets/ic_course.jpg')}
        style={itemStyle.image}
      />
      <View style={itemStyle.contentMargin}>
        <Text style={itemStyle.title}>{props.item.title}</Text>
      </View>
    </View>
  );
};

export default SectionMyChannel;
