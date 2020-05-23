import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Video } from 'expo-av';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import DefaultStyle from '../../globals/style';
import CircleImageButton from './CourseDetailItem/circle-image-button';
import Content from './CourseDetailItem/text-content-and-related-button';

const CourseDetail = (props) => {
  return (
    <ScrollView>
      <Video
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        isLooping
        style={styles.video}
        useNativeControls
      />
      <View style={styles.marginView}>
        {/* title */}
        <Text style={[styles.title, styles.marginTop]}>
          {props.route.params.item.title}
        </Text>

        {/* author */}
        <TouchableOpacity style={[styles.touchable, styles.marginTop]}>
          <Text style={styles.text_color_white}>
            {props.route.params.item.author}
          </Text>
        </TouchableOpacity>

        {/* detail */}
        <Text
          style={[DefaultStyle.darkText, styles.marginTop]}
        >{`${props.route.params.item.level}  .  ${props.route.params.item.release}  .  ${props.route.params.item.duration}`}</Text>

        {/* Bookmark - Add To Channel - Download Button */}
        <CircleImageButton style={styles.marginTop}></CircleImageButton>

        {/* Expandable content */}
        <Content style={styles.marginTop}></Content>

        {/* Take learning check Button & View related path button */}
        <View style={styles.marginTop}>
        <Button title="Take a learning check" color="#636e72"/>
        </View>
        <View style={styles.marginTop}>
        <Button title="View related paths &amp; courses" color="#636e72"/>
        </View>

      </View>
    </ScrollView>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({
  video: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * (9 / 16),
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  touchable: {
    backgroundColor: '#636e72',
    borderRadius: 15,
    opacity: 1,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'baseline',
  },
  marginView: {
    marginLeft: 10,
    marginRight: 10,
  },
  text_color_white: {
    color: '#fff',
  },
  marginTop: {
    marginTop: 5,
  },
});
