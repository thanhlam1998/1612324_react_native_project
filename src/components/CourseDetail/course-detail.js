import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DefaultStyle from '../../globals/style';

const CourseDetail = (props) => {
  return (
    <View>
      <Video
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.video}
        useNativeControls
      />
      <View style={styles.marginView}>
        <Text style={[styles.title, styles.marginTop]}>{props.route.params.item.title}</Text>
        <TouchableOpacity style={[styles.touchable, styles.marginTop]}>
          <Text style={styles.text_color_white}>
            {props.route.params.item.author}
          </Text>
        </TouchableOpacity>
        <Text
          style={[DefaultStyle.darkText, styles.marginTop]}
        >{`${props.route.params.item.level}  .  ${props.route.params.item.release}  .  ${props.route.params.item.duration}`}</Text>
      </View>
    </View>
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
      marginTop: 5
  }
});
