import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import itemStyle from '../../../../globals/style';

const SectionPathItem = (props) => {
    return (
        <View style={itemStyle.item}>
          <Image
            source={require('../../../../../assets/ic_course.jpg')}
            style={itemStyle.image}
          />
          <View style={itemStyle.contentMargin}>
            <Text style={itemStyle.title}>{props.item.title}</Text>
            <Text style={itemStyle.darkText}>
              {props.item.total}{' '}
              {props.item.total > 0 ? <Text>courses</Text> : <Text>course</Text>}
            </Text>
          </View>
        </View>
      );
}

export default SectionPathItem

const styles = StyleSheet.create({})