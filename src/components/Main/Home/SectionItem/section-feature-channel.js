import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import itemStyle from '../../../../globals/style';

const SectionFeatureChannel= (props) => {
  return (
    <View style={itemStyle.item}>
      <Image
        source={require('../../../../../assets/ic_course.jpg')}
        style={itemStyle.image}
      />
      <View style={itemStyle.contentMargin}>
        <Text style={itemStyle.title}>{props.item.title}</Text>
        <Text style={itemStyle.darkText}>
          {props.item.author}{' . '}
          {props.item.total}{' '}
          {props.item.total > 0 ? <Text>members</Text> : <Text>member</Text>}
        </Text>
      </View>
    </View>
  );
};

export default SectionFeatureChannel;
