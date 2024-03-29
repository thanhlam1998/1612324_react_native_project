import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DefaultStyle from '../../../globals/style';

const ListChannelItem = (props) => {
  return (
    <TouchableOpacity style={DefaultStyle.item_horizontal}>
      <Image
        source={require('../../../../assets/ic_course.jpg')}
        style={DefaultStyle.item_horizontal_image}
      />
      <View style={DefaultStyle.contentMargin}>
        <Text style={DefaultStyle.title}>{props.item.title}</Text>
        <Text style={DefaultStyle.darkText}>
          {props.item.author} &middot; {props.item.total}{' '}
          {props.item.total > 0 ? <Text>members</Text> : <Text>member</Text>}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListChannelItem;

const styles = StyleSheet.create({});
