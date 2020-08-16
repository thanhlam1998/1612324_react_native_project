import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import itemStyle from '../../../../globals/style';
import {themeContext} from '../../../../../data/Theme'

const SectionPathItem = (props) => {
    const {theme} = useContext(themeContext)
    return (
        <TouchableOpacity style={[itemStyle.item, {backgroundColor: theme.middleground}]} onPress={() => props.navigation.navigate('PathDetail', {name: props.item.name, item: props.item})}>
          <View style={{backgroundColor: "#000000"}}>
            <Image
              source={props.item.imageUrl ? {uri: props.item.imageUrl} : require('../../../../../assets/ic_course.jpg')}
              style={itemStyle.image}
              resizeMode={'contain'}
            />
          </View>
          <View style={itemStyle.contentMargin}>
            <Text style={[itemStyle.title, {color: theme.foreground}]}>{props.item.name}</Text>
            <Text style={itemStyle.darkText}>
              {props.item.courses.length}{' '}
              {props.item.courses.length > 0 ? <Text>courses</Text> : <Text>course</Text>}
            </Text>
          </View>
        </TouchableOpacity>
      );
}

export default SectionPathItem

const styles = StyleSheet.create({})
